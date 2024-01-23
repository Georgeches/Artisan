import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../partials/Searchbar";

export default function ArtisanPage({api}){
    const { id } = useParams();
    const [ artisan, setArtisan ] = useState({});

    console.log(`${api}/artisans/${id}`);

    useEffect(() => {
        fetch(`${api}/artisans/${id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Error loading page. Try again later');
            }
            return res.json();
          })
          .then((data) => {
            setArtisan(data);
          })
          .catch((error) => {
            console.error('Error fetching artisan: ', error);
          });
      }, []);

    return (
        <div className="container mt-5">
            <h1>Artisan:</h1>
            <h3>{artisan.name} - {artisan._id}</h3>

            <Searchbar />
        </div>
    )
}