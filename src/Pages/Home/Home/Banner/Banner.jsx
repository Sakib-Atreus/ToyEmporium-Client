// import React from 'react';

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel mt-1 w-full">
            <hr className="white"></hr>
            <div id="slide1" className="carousel-item relative w-full">
                <img className="w-full"  src="https://c1.wallpaperflare.com/preview/949/581/86/different-nationalities-children-human-globe.jpg" 
                />
                <div className="absolute rounded-xl items-center h-full flex  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%);]">
     <div className='text-white space-y-7 w-3/4 pl-4  ps-7   '>
                        <h2 className='text-8xl md:text-6xl font-bold hidden md:block lg:block'>Let<span className="bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 bg-clip-text text-transparent">&#39;</span>s <span className="bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 bg-clip-text text-transparent">Play </span>!
                        with Children</h2>
                        <p className="hidden md:hidden lg:block text-xl">Give children toys that are powered by their imagination,<br/> not by batteries.They are Our next generation</p>
                        <div >
                            <Link to="/login"><button className='text-xl w-3/4 mb-3 hidden  md:block  lg:block btn text-black font-bold bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 mr-5'>LOG-IN</button></Link>
                           <Link to="/blogs"> <button className='text-lg w-3/4 hidden  md:block  lg:block btn btn-outline text-orange-300 border-pink-500 hover:bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 font-bold hover:text-black'>BLOGS</button></Link>
                        </div>
                    </div>
                </div>
            
            </div>

        </div>
    );
};

export default Banner;
