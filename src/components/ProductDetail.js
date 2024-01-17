import { useParams } from "react-router-dom";

export default function ProductDetail(){
    const { name, id } = useParams();

    return (
        <div className="">
            <h1>Product:</h1>
            <h3>{name} - {id}</h3>
        </div>
    )
}