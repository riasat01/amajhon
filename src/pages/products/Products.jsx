import { useLoaderData } from "react-router-dom";
import Product from "../product/Product";

const Products = () => {

    const products = useLoaderData();
    const items = products.products;
    console.log(items);
    return (
        <div>
            <div className="grid grid-cols-4 gap-6 my-16">
            {
                items?.map(product  => <Product key={product?.id} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;