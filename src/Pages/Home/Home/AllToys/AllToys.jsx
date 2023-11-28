import ToyTable from "../ToyTable/ToyTable";
// import img from "../../../../../assets/banner/pexels-photo-207983.jpeg"
import { useEffect, useState } from "react";

const AllToys = () => {
    // const toys = useLoaderData();

    // const { _id,name, price, quantity, category, sellerName } = toys;
    // console.log(_id,name, price, quantity, category, sellerName )

    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(loading);

    useEffect( () => {
        setLoading(true)
        fetch("https://toy-emporium-server-nine.vercel.app/allToys")
        .then(result => result.json())
        .then(data=>{
            setToys(data)
            setLoading(false)
        })
    },[])

    console.log(toys);
  

    useEffect ( () => {
        document.title = "All Toy's";
    },[])

    return (
        <div>
            <div className="flex bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 ">
                <div className="w-1/2">
                    <img className="w-full" src="https://c1.wallpaperflare.com/preview/157/220/891/smiley-laugh-funny-emoticon-thumbnail.jpg" alt="" />
                </div>
                <div className="w-1/2">
                    <img className="w-full" src="https://c1.wallpaperflare.com/preview/157/220/891/smiley-laugh-funny-emoticon-thumbnail.jpg" alt="" />
                </div>
            </div>
            <div>
            <div className="">
         <h1 className="font-black text-5xl text-center text-black p-5 bg-gradient-to-r from-[#ff0844] from-20% via-[#ffb199] via-50% to-orange-400 to-90% ">Collection of Toy{"'"}s</h1>
        
                </div>
            </div>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr >
                            <th className="bg-black border rounded text-center text-white">Toy Name</th>
                            <th className="bg-black border rounded text-center text-white">Seller</th>
                            <th className="bg-black border rounded text-center text-white">Sub-category </th>
                            <th className="bg-black border rounded text-center text-white">Price</th>
                            <th className="bg-black border rounded text-center text-white" >Quantity</th>
                            <th className="bg-black border rounded text-center text-white">Details</th>
                            <th className="bg-black border rounded text-center text-white">Buy Toy</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        { toys &&
                            toys?.slice(0,20).map(toy => <ToyTable
                                key={toy.id}
                                toy={toy}
                            ></ToyTable>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;