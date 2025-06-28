import logo from "../assets/Taskly-Logo.png"
// import { IoInvertMode } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between md:px-5 p-1 bg-black text-white w-full md:text-md text-sm h-full'>
     
        <div className='flex items-center md:mx-3'>
            <img src={logo} alt="Logo" className="md:w-14 w-10"/>
            <span className="font-bold text-lg">Taskly</span>
        </div>
     
        <ul className='flex items-center gap-2 md:mx-5 '>
            
              <NavLink to="/" className={(e) => {return e.isActive&&"bg-stone-200 text-black transition-all duration-200 rounded-md"}}>
                <li className="hover:bg-stone-200 hover:text-black transition-all cursor-pointer p-2 px-3 rounded-md">Home</li>
              </NavLink>
            
            
              <NavLink to="/About" className={(e) => {return e.isActive&&"bg-stone-200 text-black transition-all duration-200 rounded-md"}}>
              <li className="hover:bg-stone-200 hover:text-black transition-all cursor-pointer p-2 px-3 rounded-md">About</li>
              </NavLink>
           
            {/* <li className="hover:bg-white hover:text-black hover:scale-105 transition-all cursor-pointer px-2 py-1 rounded-lg"><button><IoInvertMode /></button></li> */}
        </ul>
     </div>

  )
}

export default Navbar
 
