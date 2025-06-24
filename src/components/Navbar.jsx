import logo from "../assets/Taskly-Logo.png"
import { IoInvertMode } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex justify-between py-1 md:px-5 bg-black text-white w-full md:text-md text-sm'>
     
        <div className='flex items-center md:mx-3'>
            <img src={logo} alt="Logo" className="md:w-14 w-10"/>
            <span className="font-bold">Taskly</span>
        </div>
     
        <ul className='flex justify-between items-center md:gap-3 md:mx-5'>
            <li className="hover:bg-white hover:text-black hover:scale-105 transition-all cursor-pointer px-2 py-1 rounded-lg">Home</li>
            <li className="hover:bg-white hover:text-black hover:scale-105 transition-all cursor-pointer px-2 py-1 rounded-lg">About</li>
            <li className="hover:bg-white hover:text-black hover:scale-105 transition-all cursor-pointer px-2 py-1 rounded-lg"><button><IoInvertMode /></button></li>
        </ul>
     </div>

  )
}

export default Navbar
 