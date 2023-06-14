// import React from 'react';

import { Link } from "react-router-dom";

const Section = () => {
    return (
        <div>
            <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">Toy{"'"}s with Exciting Offer !</h1>
    <div className="hero min-h-scree bg-black mt-1 mb-1 rounded text-white ">

                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://c4.wallpaperflare.com/wallpaper/279/630/377/man-made-stuffed-animal-heart-teddy-bear-wallpaper-preview.jpg" className=" rounded-lg shadow-2xl h-100" />
                    {/* <img src="https://c4.wallpaperflare.com/wallpaper/279/630/377/man-made-stuffed-animal-heart-teddy-bear-wallpaper-preview.jpg" className="max-w-sm rounded-lg shadow-2xl h-60 " /> */}

                    <div>
                        <h1 className="text-5xl font-bold ">Get your <span className="bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 bg-clip-text text-transparent underline underline-offset-8"><Link to="/offer">Offer</Link></span> easily !</h1>
                        <p className="py-6">Here at The Toy Guy, summer begins long before the calendar turns, the days get longer and we finally warm up a bit. We have been looking at new toys for this summer for a few months now, and we are excited to share some of what we have found with you.
                            <br /><br />
                            Well, it is spring, and soon it will be summer. For many kids it will be the end of the first full school year since the pandemic. And there have been a lot of changes in so many areas of our lives. As difficult as change can be for adults, it can be even more challenging.</p>

                        {/* The button to open modal */}
                        <a href="#my-modal-2" className="btn bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 text-black font-bold ">Read More ...</a>

                        <div className="modal" id="my-modal-2">
                            <div className="modal-box bg-">
                                <h3 className="font-bold text-lg border border-red-400  text-red-200 p-3 rounded-xl"> Interactive Features
                                    Equipped with advanced sensors and built-in Bluetooth connectivity, the Cell-toy Panda responds to touch, sound, and movement. It can mimic real panda behaviors, such as blinking its eyes, wiggling its ears, and even performing playful somersaults. By interacting with the toy, children can develop their creativity and imagination while engaging in hours of entertainment.
                                    <br />
                                    Educational Benefits
                                    Beyond its interactive features, the Cell-toy Panda offers educational value. Through a dedicated smartphone application, users can access a range of informative content about pandas, including facts, photos, and even virtual experiences of panda habitats.

                                    <br /> Comfort and Relaxation
                                    The Cell-toy Panda doubles as a cozy and comforting companion. Its soft, plush exterior and gentle vibrations create a soothing sensation, perfect for cuddling during naptime or before bedtime. The pandas rhythmic breathing sounds and lullabies help create a serene environment, promoting relaxation and peaceful sleep.

                                </h3>
                                <div className="modal-action">
                                    <a href="#" className="btn bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 justify-center text-black">Yay...!</a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Section;