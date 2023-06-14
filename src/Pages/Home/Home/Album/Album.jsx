// import React from 'react';

import { Link } from "react-router-dom";

const Album = () => {
  return (

    <div>

      <div className=" p-3 mt-2 lg:hidden md:hidden d-block rounded-xl items-center h-full flex  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%);]">
        <div className='text-white space-y-7 pl-4  ps-7   '>
          <h2 className='text-6xl font-bold'>Let<span className="bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 bg-clip-text text-transparent">&#39;</span>s <span className="bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 bg-clip-text text-transparent">Play</span>!
            with Children</h2>
          <p className="text-xl">Give children toys that are powered by their imagination,<br /> not by batteries.They are Our next generation</p>
          <div className="grid">
            <Link to="/login"><button className='mb-3 btn w-3/4 text-black font-bold bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400  mr-5'>LOG-IN</button></Link>
            <Link to="/blogs"> <button className='w-3/4 btn text-orange-300 border-pink-500 hover:bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 font-bold hover:text-black'>BLOGS</button></Link>
          </div>
        </div>
      </div>



      <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">Gallery of Toy{"'"}s</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-black mb-2">

        <div className="grid gap-4
         ">
          <div>

            <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/580/774/532/figure-funny-minions-wave.jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/863/928/897/racing-cars-figures-funny-toys.jpg" alt="" />
            
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/38/103/792/one-piece-manga-anim%C3%A9-figure.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">

          <div>
          <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/649/827/831/danbo-parents-child-family.jpg" alt="" />
          
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/795/865/178/happy-smiley-laugh-funny.jpg" alt="" />
            
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/620/533/289/lucky-pig-figures-cute-luck.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/1012/420/1002/video-games-super-mario-super-mario-bros-luigi-artwork-ghost-dark-moon-luigis-mansion-luigis-mansion-video-games-mario-hd-art-wallpaper-preview.jpg" alt="" />
            
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/689/654/352/machine-the-explosion-sport-cartoon-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/178/380/839/artwork-digital-art-robot-wallpaper-preview.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c1.wallpaperflare.com/preview/423/519/577/playmobil-toy-figures-construction-trades.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/904/916/38/lego-wallpaper-preview.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg mb-3" src="https://c1.wallpaperflare.com/preview/428/887/656/batman-lego-toys-kids.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>


  );
};

export default Album;