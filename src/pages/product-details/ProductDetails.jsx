import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";

const ProductDetails = () => {
    const data = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${data.id}`)
        .then(res => res.json())
        .then(item => {
            console.log(item);
            setProduct(item)
        })
    },[]);
    // console.log(product);
    // console.log(data.id)
    const navigate = useNavigate();
    const {thumbnail, title, description, price} = product;
    const handleBack = () => {
        navigate(-1); 
    }
    const navigation = useNavigation();
    console.log(navigation);
    return (
        // <section className="bg-slate-900 max-w-lg mx-auto my-12 rounded-xl shadow-xl">
        //     <img className="rounded-xl mx-auto" src={thumbnail} alt={description} />
        //     <div className="p-6">
        //     <h1 className="text-3xl font-bold">{title}</h1>
        //     <p>{description}</p>
        //     <section className="flex justify-between items-center text-xl font-semibold mt-6">
        //         <p className="">${price}</p>
        //         <button className="bg-purple-700 px-6 py-2 rounded-xl">Add to Cart</button>
        //     </section>
        //     <button onClick={handleBack} className="w-full bg-purple-700 px-6 py-2 rounded-xl">Back</button>
        //     </div>
        // </section>

       <div>
         {
            navigation.state === "loading" ? <span className="loading loading-infinity loading-lg"></span> : <section className="bg-slate-900 max-w-lg mx-auto my-12 rounded-xl shadow-xl">
            <img className="rounded-xl mx-auto" src={thumbnail} alt={description} />
            <div className="p-6">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{description}</p>
            <section className="flex justify-between items-center text-xl font-semibold mt-6">
                <p className="">${price}</p>
                <button className="bg-purple-700 px-6 py-2 rounded-xl">Add to Cart</button>
            </section>
            <button onClick={handleBack} className="w-full bg-purple-700 px-6 py-2 rounded-xl">Back</button>
            </div>
        </section>
        }
       </div>
    );
};

export default ProductDetails;