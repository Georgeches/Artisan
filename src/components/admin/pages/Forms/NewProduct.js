import React, { useState } from "react";

export default function NewProduct({api}){

    const [newProduct, setNewProduct] = useState({})
    const [error, setError] = useState('')
    const path = `${api}/products`
    console.log(newProduct)
    function saveProduct(e){
        e.preventDefault()

        fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>{
            if(!res.ok){
                setError("Could not save product. Try again later.")
            }
            console.log(res.json())
        })
    }

    return(
        <div className="border d-flex justify-content-center pb-3" style={{height: "fit-content"}}>
            <form className="bg-light w-50 mt-4 px-5">
                <p className="h4 text-center p-3">New product form</p>
                <label htmlFor="name">
                    Product name
                </label>
                <input onChange={e=>setNewProduct({...newProduct, ...{name: e.target.value}})} className="form-control mb-3" id="name" name="name" type="text" placeholder="Enter product name"/>
                
                <label htmlFor="price">
                    Price
                </label>
                <input onChange={e=>setNewProduct({...newProduct, ...{price: e.target.value}})} className="form-control mb-3" id="price" name="price" type="number" placeholder="Enter price"/>

                <label htmlFor="category">
                    Category
                </label>
                <input onChange={e=>setNewProduct({...newProduct, ...{category: e.target.value}})} className="form-control mb-3" id="category" name="category" type="text" placeholder="Enter category of product"/>

                <label htmlFor="quantity">
                    Quantity
                </label>
                <input onChange={e=>setNewProduct({...newProduct, ...{quantity: e.target.value}})} className="form-control mb-3" id="quantity" name="quantity" type="number" placeholder="Enter quantity"/>

                <label htmlFor="image">
                    Image
                </label>
                <input onChange={e=>setNewProduct({...newProduct, ...{image: [URL.createObjectURL(e.target.files[0])]}})} className="form-control mb-3" id="image" name="image" type="file" accept="image/*" placeholder="Enter image of product"/>

                {newProduct?.image &&
                    <div className="imageUploaded p-5 mb-3 text-center" style={{background: "rgb(230, 230, 230)"}}>
                        <img width="50%" src={newProduct?.image} alt="upload"/>
                    </div>
                }

                <label htmlFor="quantity">
                    Description of product
                </label>
                <textarea onChange={e=>setNewProduct({...newProduct, ...{description: e.target.value}})} className="form-control" rows="5"></textarea>
                
                <button onClick={e=>saveProduct(e)} className="btn btn-success mt-3">Save product</button>
            </form>
        </div>
    )
}