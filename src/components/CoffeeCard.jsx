import { FaEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({data}) => {
    const { _id, name,cafe, photo} = data;

    const handleCoffeCardDelete = id => {
        console.log(id)
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   
   fetch(`http://localhost:5000/coffee/${_id}`, {
    method: 'DELETE'
   })
   .then(res => res.json())
   .then(data => {
    console.log(data)
    if(data.deletedCount > 0){
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
   })
  }
});
    }
    return (
        <div className="bg-[#F5F4F1] flex p-4 gap-4">
            <img src={photo} alt="" />
            <div className="flex flex-col gap-2 items-start justify-center">
                <p>{name}</p>
                <p>{cafe}</p>
                <p>price</p>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
                <div className="bg-[#D2B48C] p-2 rounded-md"><FaEye /></div>
                <Link to={`/updateCoffee/${_id}`}>
                <div className="bg-[#3C393B] p-2 rounded-md"><FaPen /></div>
                </Link>
                <div onClick={() => handleCoffeCardDelete(_id)} className="bg-[#EA4744] p-2 rounded-md"><MdDelete /></div>
            </div>
            
        </div>
    );
};

export default CoffeeCard;