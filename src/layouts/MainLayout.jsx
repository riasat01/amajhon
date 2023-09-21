import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <section className="flex justify-between px-5 shadow-xl py-7">
            <h2 className="text-2xl font-bold">Ama Jhon</h2>
            <nav>
                <ul className="flex gap-5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;