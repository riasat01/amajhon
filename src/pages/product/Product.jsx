import { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const [imageNum, setImageNum] = useState(0);
    const { id, images, title, description, price } = product;
    const handleImage = () => {
        imageNum < 4 ? setImageNum(imageNum + 1) : setImageNum(0);
    }
    return (
        <div>

            <div className="card glass">
                <figure><img className="h-96 w-full" onClick={handleImage} src={images[imageNum]} alt={description} /></figure>
                <div className="card-body h-72 flex flex-col">
                    <h2 className="card-title">{title}</h2>
                    <p className="flex-grow">{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${id}`} className="w-full btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;