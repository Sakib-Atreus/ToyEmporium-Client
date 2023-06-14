import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
//Price, available quantity, Detail description)

const EdiToy = () => {
  const data = useLoaderData();
  const handleUpdate =event =>{
    event.preventDefault();
    const form =event.target;
    const price = form.price.value;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    console.log(price,quantity,details,name);
    form.reset();
    console.log(data.price);
    const update ={price , quantity,details ,name};
    fetch(`https://toy-emporium-server-nine.vercel.app/allToys/${data._id}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(update)
    })
    .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                  Swal.fire({
                    background:'black',
                    position: 'center',
                    icon: 'success',
                    title: 'Your toy has been updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
            })
            
  }

  useEffect ( () => {
    document.title = `Edit | ${data.name}`;
},[data])
  return (
    <div>
      <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">Update Toy{"'"}s !</h1>
      {/* <h1 className="text-center text-black font-black text-xl m-2">Name :
      {data?.name}</h1> */}
      <form onSubmit={handleUpdate} className=" items-center grid justify-center w-full">
      <h2 className="text-black font-bold">Name :</h2>
        <input type="text" name="name" defaultValue={data?.name} placeholder="Type here" className="input input-bordered input-secondary  bg-black text-white w-full max-w-xs items-center" />
        <h2 className="text-black font-bold">Price :</h2>
        <input type="text" name="price" defaultValue={data?.price} placeholder="Type here" className="input input-bordered input-secondary  bg-black text-white w-full max-w-xs items-center" />
        <br />
        <h2 className="text-black font-bold">Quantity :</h2>
        <input type="text" name="quantity" defaultValue={data?.quantity}  placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs bg-black text-white" />
        <br />
        <h2 className="text-black font-bold">Details :</h2>
        <input type="text" name="details" defaultValue={data?.details}  placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs bg-black text-white" />
        <input className="btn border mb-4 mt-8 font-bold text-red-300 bg-black rounded-full w-full max-w-xs" type="submit" />


      </form>
    </div>
  );
};
export default EdiToy;