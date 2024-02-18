import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditProduct({api, products}){

    const {id} = useParams()
    const product = products.find(i=>i?._id===id)
    const [updatedProduct, setUpdatedProduct] = useState({})
    const [pics, setPics] = useState([])
    const [newImage, setNewImage] = useState('')
    const [error, setError] = useState('')
    const path = `${api}/products/${product?._id}`
    console.log(updatedProduct)

    useEffect(()=>{
        setUpdatedProduct(product)
        setPics(product?.otherPics)
    }, [product])

    function saveProduct(e){
        e.preventDefault()

        fetch(path, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=>{
            if(!res.ok){
                setError("Could not save product. Try again later.")
            }
            console.log(res.json())
        })
    }

    function deleteImage(e, otherPic){
        e.preventDefault()

        setUpdatedProduct({...updatedProduct, ...{otherPics: updatedProduct.otherPics.filter(pic=>pic!==otherPic)}})
        setPics(pics.filter(pic=>pic!==otherPic))
    }

    return(
        <div className="border d-flex justify-content-center pb-3" style={{height: "fit-content"}}>
            <form className="bg-light w-50 mt-4 px-5">
                <p className="h4 text-center p-3">Update product</p>
                <label htmlFor="name">
                    Product name
                </label>
                <input value={product?.name} onChange={e=>setUpdatedProduct({...updatedProduct, ...{name: e.target.value}})} className="form-control mb-3" id="name" name="name" type="text" placeholder="Enter product name"/>
                
                <label htmlFor="price">
                    Price
                </label>
                <input value={product?.price} onChange={e=>setUpdatedProduct({...updatedProduct, ...{price: e.target.value}})} className="form-control mb-3" id="price" name="price" type="number" placeholder="Enter price"/>

                <label htmlFor="category">
                    Category
                </label>
                <input value={product?.category} onChange={e=>setUpdatedProduct({...updatedProduct, ...{category: e.target.value}})} className="form-control mb-3" id="category" name="category" type="text" placeholder="Enter category of product"/>

                <label htmlFor="quantity">
                    Quantity
                </label>
                <input value={product?.quantity} onChange={e=>setUpdatedProduct({...updatedProduct, ...{quantity: e.target.value}})} className="form-control mb-3" id="quantity" name="quantity" type="number" placeholder="Enter quantity"/>

                <label htmlFor="image">
                    Image
                </label>
                <input value={product?.image} onChange={e=>setUpdatedProduct({...updatedProduct, ...{image: [URL.createObjectURL(e.target.files[0])]}})} className="form-control mb-3" id="image" name="image" type="file" accept="image/*" placeholder="Enter image of product"/>

                {updatedProduct?.image?
                    <div className="imageUploaded p-5 mb-3 text-center" style={{background: "rgb(230, 230, 230)"}}>
                        <img width="50%" src={updatedProduct?.image} alt="upload"/>
                    </div>
                    :
                    <div className="imageUploaded p-5 mb-3 text-center" style={{background: "rgb(230, 230, 230)"}}>
                        <img width="50%" src={product?.image} alt="upload"/>
                    </div>
                }

                <label htmlFor="quantity">
                    Description of product
                </label>
                <textarea onChange={e=>setUpdatedProduct({...updatedProduct, ...{description: e.target.value}})} className="form-control" rows="5">{product?.description}</textarea>
                
                <div className="mt-4 mb-4">
                    <p className="h7 mb-2">Product images:</p>
                    <div className="table-responsive">
                        <table className="table table-responsive">
                            <thead>
                                <tr className="bg-light">
                                    <th scope="col" width="10%">Image</th>
                                    <th scope="col" width="10%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pics?.map(otherPic=>
                                    <tr key={otherPic}>
                                        <td>
                                            <img
                                                src="https://ih1.redbubble.net/image.5404692566.9768/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
                                                alt=''
                                                width="80"
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className='btn btn-link text-danger p-0'
                                                style={{textDecoration: 'none'}}
                                                onClick={e=>deleteImage(e, otherPic)}>
                                                    <i class="bi bi-trash-fill"></i>Delete
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {pics?.length===0&&(
                                    <div className='container d-flex align-center mt-3' style={{position: "fixed"}}>
                                        <p className='text-muted'>No additional images</p>
                                    </div>
                                )}
                        <hr/>
                    </div>
                </div>
                <button onClick={e=>saveProduct(e)} className="btn btn-success mt-3">Update product</button>
            </form>
        </div>
    )
}