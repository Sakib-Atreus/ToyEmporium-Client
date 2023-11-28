
import { Link } from "react-router-dom";
const ToyTable = ({ toy }) => {
    
   
    const { _id,name, price, quantity, category, sellerName } = toy;



    return (
        <>
            <tr className="">
                <td className="border-black text-black bg-red-400">
                 <div className="font-bold">{name}</div>
                </td>
                <td className="text-center border-black text-white bg-gray-500">{sellerName}</td>
                <td className="text-center border-black  text-black bg-orange-100">{category}</td>
                <td className="text-center border-black text-black bg-red-300">{price}</td>
                <td className="text-center border-black text-black bg-gray-400">{quantity}</td>

                <th className="bg-pink-100 text-center border-black"> 
                    <Link to={`/details/${_id}`}> <button className="btn btn-ghost btn-xs bg-black text-white">details</button></Link>
                </th>
                <th className="bg-pink-100 text-center border-black"> 
                    <Link to={`/buyToy/${_id}`}> <button className="btn btn-ghost btn-xs bg-black text-white">purchase</button></Link>
                </th>
               
            </tr>
        </>
    );
};

export default ToyTable;