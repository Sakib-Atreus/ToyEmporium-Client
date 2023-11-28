import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Notification = () => {

    const { user } = useContext(AuthContext)
    const [Toys, setToys] = useState([]);
    
    // const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        fetch(`https://toy-emporium-server-nine.vercel.app/buyAll/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
                document.title = "Sells Toys";
            })
    }, [user])



    return (
        <div className="my-jobs-container">
            <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                <div className="">
                    <img className="w-[1280px] h-[460px]" src="https://cdn.create.vista.com/common/84952db9-4f26-4255-bbeb-04aaa3430bda_1024.jpg" alt="" />
                </div>
            </div>
            <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">Selling Toy{"'"}s</h1>
            <div className="search-box  text-center">
               
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr >
                            <th className="bg-black border rounded text-center text-white">#</th>
                            <th className="bg-black border rounded text-center text-white">Toy Name</th>
                            <th className="bg-black border rounded text-center text-white">Price</th>
                            <th className="bg-black border rounded text-center text-white">Buyer Name</th>
                            <th className="bg-black border rounded text-center text-white">Buyer Number</th>

                        </tr>
                    </thead>
                    <tbody className="text-black text-center bg-black">
                        {
                            Toys.map((toy, index) => <tr key={toy}>
                                <td className="text-center border-black text-black bg-red-200">{index + 1}</td>
                                <td className="text-center border-black text-black bg-red-300 font-bold">{toy.name}</td>
                                <td className="text-center border-black text-black bg-red-200">{toy.price}</td>
                                <td className="text-center border-black font-bold text-black bg-red-300">{toy.buyerName}</td>
                                <td className="text-center border-black text-black bg-red-200">{toy.number}</td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Notification;