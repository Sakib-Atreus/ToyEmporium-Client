// import React from 'react';
//
const SectionTwo = () => {
    return (
        <div>
             <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">Reviews and Ratings</h1>
            <div  className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 w-full rounded-full">
            <div className=" bg-black m-1 rounded  p-3  ">
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">It’s always such an amazing experience shopping with toys world</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">Greats customer service and fast shipping.</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-accent">Will definitely shop with you again!</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">Thank you So much</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-warning">Our pleaser sir.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-error">Its never happened before.</div>
                </div>
            </div>
            <div className="text-black p-2">
                <h1 className="mb-2 text-3xl font-bold">Customer Feedback</h1>
                <p className="mb-4 font-semibold">This store{"'"}s selection is out of this world. Clearly they live and love what they do. I went for kites and was blown away by the selection. The rest of the store was a sight to see, between high quality toys, and just-to-look-at large models suspended above. I will be back!</p>
                <img src="../../../../../assets/review.png" alt="" />
            </div>
            <div className=" bg-black m-1 rounded p-3  ">
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">Toys has always provided me with outstanding service. </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">Fast and easy ordering, amazing customer service and products. </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-accent">My order was as described and well packaged by Toy world</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">Thank you sir</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">we are very happy to see you</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-warning">Be with us</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-error">Again Thank you sir</div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default SectionTwo;