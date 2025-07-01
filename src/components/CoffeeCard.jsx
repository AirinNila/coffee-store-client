import { FaEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({data}) => {
    const {name,cafe, photo} = data;
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
                <div className="bg-[#3C393B] p-2 rounded-md"><FaPen /></div>
                <div className="bg-[#EA4744] p-2 rounded-md"><MdDelete /></div>
            </div>
            
        </div>
    );
};

export default CoffeeCard;