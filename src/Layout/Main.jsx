import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className=' bg-gradient-to-r from-pink-600 via-orange-300 to-pink-300 max-w-7xl mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;