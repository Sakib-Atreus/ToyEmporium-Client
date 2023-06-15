
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

const Aos = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
              <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">AOS Album !</h1>
             <div className='grid grid-cols-2 text-center font-black text-black mt-5 mb-5 '>
            
            <div data-aos="flip-down">
                <img className='w-full' src="https://c4.wallpaperflare.com/wallpaper/910/350/358/test-robot-for-kids-robotic-industry-for-kids-review-wallpaper-preview.jpg" alt="" />
            </div>
            <div data-aos="flip-up">
                <img className='w-full'  src="https://c1.wallpaperflare.com/preview/344/14/360/dancing-dave-minion-minion-tim-despicable-me-minions.jpg"  alt="" />
            </div>
            <div data-aos="flip-down">
                <img className='w-full'  src="https://c4.wallpaperflare.com/wallpaper/1020/176/1004/toy-story-characters-wallpaper-preview.jpg"alt="" />
            </div>
            <div data-aos="flip-up">
                <img className='w-full'  src="https://c1.wallpaperflare.com/preview/359/628/886/building-blocks-construction-play.jpg" alt="" />
            </div>
            <div data-aos="flip-down">
                <img className='w-full'  src="https://c1.wallpaperflare.com/preview/672/554/509/police-motorcycle-cop-two-wheeled-vehicle.jpg"  alt="" />
            </div>
            <div data-aos="flip-up">
                <img className='w-full' src="https://c1.wallpaperflare.com/preview/345/625/78/bird-birdie-plush-stuffed-animal.jpg" alt="" />
            </div>
          
        </div>
        </div>
    );
};

export default Aos;