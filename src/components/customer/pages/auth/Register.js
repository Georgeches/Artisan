import React, { useState } from 'react';
import '../css/customerInfo.css';
import { useNavigate } from 'react-router-dom';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export default function Register({ api }) {
    const nav = useNavigate();
    let path = api + '/artisans'

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [location, setLocation] = useState('');
    const [county, setCounty] = useState('');
    const [town, setTown] = useState('');
    const [errors, setErrors] = useState([]);
    const [profilePicture, setProfilePicture] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

   
    console.log(process.env.REACT_APP_NEXT_AWS_S3_REGION)

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
        setSelectedImage(URL.createObjectURL(file));
    };

    async function registerArtisan(e) {
        e.preventDefault();

        try {
            if (!profilePicture) {
                throw new Error("Please select a profile picture");
            }

            const uploadedFilename = await uploadFileToS3(profilePicture, profilePicture.name);

            let artisan = {
                name: firstName + ' ' + secondName,
                county: county,
                town: town,
                location: location,
                email: userEmail,
                password: password,
                customers: [],
                oders: [],
                phone: userPhone,
                profilePicture:'https://inuacraft.s3.eu-north-1.amazonaws.com/'+ uploadedFilename
            };
            console.log(uploadedFilename)

            const response = await fetch(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(artisan)
            });

            if (!response.ok) {
                setErrors(await response.json());
                console.log(errors);
            } else {
                console.log(await response.json());
                nav('/login');
            }
        } catch (err) {
            console.log('Error:', err);
        }
    }

    async function uploadFileToS3(file, filename) {
        const uploadClient = new S3Client({
            region: process.env.REACT_APP_NEXT_AWS_S3_REGION,
            credentials: {
                secretAccessKey: process.env.REACT_APP_NEXT_AWS_S3_SECRET_ACCESS_KEY,
                accessKeyId: process.env.REACT_APP_NEXT_AWS_S3_ACCESS_KEY_ID,
            },
        });
    
        const fileBuffer = file;
        const params = {
            Bucket: process.env.REACT_APP_NEXT_AWS_S3_BUCKET_NAME,
            Key: `${filename}${Date.now()}`,
            Body: fileBuffer,
            ContentType: "image/jpeg",
        };
        const command = new PutObjectCommand(params);
        console.log(command)
        try {
            const response = await uploadClient.send(command);
            console.log(response);
            return params.Key;
            console.log(params.Key)
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    

    return (
        <div className="container-fluid checkout-page">
            <div className="row contact-info bg-light p-4">
                <form onSubmit={registerArtisan}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="first-name" className="form-label">
                                First name
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                id="first-name"
                                placeholder="Enter first name"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                spellCheck="false"
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="second-name" className="form-label">
                                Second name
                            </label>
                            <input
                                autoComplete="off"
                                type="text"
                                id="second-name"
                                placeholder="Enter second name"
                                className="form-control"
                                value={secondName}
                                onChange={(e) => setSecondName(e.target.value)}
                                spellCheck="false"
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        spellCheck="false"
                    />
                    <label htmlFor="phone" className="form-label">
                        Phone number
                    </label>
                    <input
                        autoComplete="off"
                        type="number"
                        id="phone"
                        placeholder="Your phone number"
                        className="form-control"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        spellCheck="false"
                        required
                    />
                    <label htmlFor="phone" className="form-label">
                        Password
                    </label>
                    <input
                        autoComplete="off"
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor="address-one" className="form-label">
                                Location
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="Your location"
                                className="form-control"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                spellCheck="false"
                                required
                            />
                        </div>

                        <div className='col'>
                            <label htmlFor="address-two" className="form-label">
                                County
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="Your county"
                                className="form-control"
                                value={county}
                                onChange={(e) => setCounty(e.target.value)}
                                spellCheck="false"
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor="city" className="form-label">
                        Nearest Town
                    </label>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Nearest town around you"
                        className="form-control"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                        spellCheck="false"
                        required
                    />
                    <label htmlFor="profile-picture" className="form-label">
                        Profile Picture
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="form-control"
                        onChange={handleProfilePictureChange}
                        accept="image/*"
                    />

                    {selectedImage && (
                        <div className="mt-3">
                            <label>Selected Image:</label>
                            <img src={selectedImage} alt="Selected Profile" className="img-fluid" />
                        </div>
                    )}

                    <button className="btn btn-dark mt-2 next-btn">Register</button>
                    <p className=''>Already have an account? <a href='login' className='ms-1 text-info'>Log in</a></p>
                </form>
            </div>
        </div>
    );
}
