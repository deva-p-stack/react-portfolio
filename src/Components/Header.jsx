import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import ThemeContext from "./ThemeContext";
import { useState,useContext } from "react";

export default function Header(){

   
   const [appear,setAppear]= useState(false);

const { darkMode, toggleTheme } = useContext(ThemeContext);


return(

<>



<nav className="w-full py-2 pr-10 flex-wrap bg-white  dark:bg-slate-900 flex justify-between items-center  ">

    {/* left side */}
    <div className="flex pl-20 tracking-wider py-1 dark:text-gray-100 ">
            <h3 className=" text-xl">Devaprabhu</h3>
    </div>

{/* right side  */}
<div>

<ul className=" hidden pr-20 gap-5 py-1 md:flex justify-center items-center  ">
    <li className="dark:text-gray-100">
        <NavLink>home</NavLink>
    </li>
    
    <li  className="dark:text-gray-100">
        <NavLink>Project</NavLink>
    </li>
    
    <li  className="dark:text-gray-100">
        <NavLink>About</NavLink>
    </li>
    
    <li  className="dark:text-gray-100">
        <NavLink>Blog</NavLink>
    </li>
    
    <li  className="dark:text-gray-100">
        <NavLink>Skills</NavLink>
    </li>
  
    <li  className="dark:text-gray-100">
        <NavLink>Contact</NavLink>
    </li>

    <button onClick={toggleTheme} className=" cursor-pointer p-3 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-yellow-400" >
        {darkMode ? (<Sun className="text-yellow-400 " size={20} />) : ( <Moon className="text-gray-700" size={20} /> )}
      </button>


</ul>

{/* end of right div  */}
</div>

{/* icon */}
<button type="button" onClick={() => setAppear(!appear)} className="w-8 h-6 flex ml-10 cursor-pointer md:hidden flex-col justify-between bg-green-300">
    <span className="w-full block h-2 bg-green-300  rounded"></span>
    <span className="w-full block h-2 bg-green-300  rounded"></span>
    <span className="w-full block h-2 bg-green-300  rounded"></span>
</button>


{/* mobile responsive design */}
{appear && (

<ul className=" flex  w-full  flex-col  justify-center items-center gap-2">
    <li>
        <NavLink>home</NavLink>
    </li>
    
    <li>
        <NavLink>Project</NavLink>
    </li>
    
    <li>
        <NavLink>About</NavLink>
    </li>
    
    <li>
        <NavLink>Blog</NavLink>
    </li>
    
    <li>
        <NavLink>Skills</NavLink>
    </li>
    <li>
        <NavLink>Service</NavLink>
    </li>

    <li>
        <NavLink>Contact</NavLink>
    </li>


</ul>


)}


{/* end of nav header */}
</nav>


</>

);

}