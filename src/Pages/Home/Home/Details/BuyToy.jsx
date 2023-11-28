import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../../Providers/AuthProvider";
//Price, available quantity, Detail description)

const BuyToy = () => {
    const { user, displayName } = useContext(AuthContext)
    const data = useLoaderData();
    const handleUpdate =event =>{
    event.preventDefault();
    const form =event.target;
    const price = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const buyerName = form.buyerName.value;
    const number = form.number.value;
    console.log(price,email,buyerName,name,number);
    form.reset();
    console.log(data.price);
    const update ={price , email,buyerName ,name, displayName, number};
    fetch('https://toy-emporium-server-nine.vercel.app/buyNow', {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(update)
    })
    .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Purchase was Successful",
                        showConfirmButton: false,
                        timer: 1500,
                        textColor:'#0000',
                        iconColor:'#F08080',
                        background:'black',
                      })
                }
            })
            
  }

  useEffect ( () => {
    document.title = `Edit | ${data.name}`;
},[data])
  return (
    <div>
      <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">Buy Toy{"'"}s !</h1>
      {/* <h1 className="text-center text-black font-black text-xl m-2">Name :
      {data?.name}</h1> */}
      <form onSubmit={handleUpdate} className=" items-center grid justify-center w-full">
      <h2 className="text-black font-bold">Name :</h2>
        <input type="text" name="name" defaultValue={data?.name} placeholder="Type here" className="input input-bordered input-secondary  bg-black text-white w-full max-w-xs items-center" />
        <h2 className="text-black font-bold">Price :</h2>
        <input type="text" name="price" defaultValue={data?.price} placeholder="Type here" className="input input-bordered input-secondary  bg-black text-white w-full max-w-xs items-center" />
        <br />
        <h2 className="text-black font-bold">Seller Email :</h2>
        <input type="text" name="email" defaultValue={data?.email}  placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs bg-black text-white" />
        <br />
        <h2 className="text-black font-bold">User Name :</h2>
        <input type="text" name="buyerName" defaultValue={user?.displayName}  placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs bg-black text-white" />
        <br />
        <h2 className="text-black font-bold">Phone Number :</h2>
        <input type="number" name="number" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs bg-black text-white" required />
        <br />
        <br /><h2 className="text-gray-900 font-bold">Are you sure to buy this toy? If you sure <br />please press the submit button.</h2>
        <input className="btn border mb-4 mt-8 font-bold text-red-300 bg-black rounded-full w-full max-w-xs" type="submit" />
        


      </form>
    </div>
  );
};
export default BuyToy;