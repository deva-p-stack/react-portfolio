import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import ThemeContext from "./ThemeContext";
import { useState,useContext } from "react";

export default function Header(){

   
   const [appear,setAppear]= useState(false);

const { darkMode, toggleTheme } = useContext(ThemeContext);


return(

<>

{/* border-b border-slate-200 dark:border-cyan-90 */}

<nav className="w-full py-2 pr-10 flex-wrap bg-white   text-slate-900 dark:bg-slate-950 flex justify-between items-center shadow-md dark:shadow-2xl dark:shadow-cyan-900/50">
    {/* left side */}
   <div className="flex pl-20 tracking-wider py-1">
<h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 cursor-pointer">
  Deva<span className="text-cyan-500">prabhu</span>
</h3>
</div>

{/* right side  */}
<div>

<ul className=" hidden pr-20 gap-5 py-1 md:flex justify-center items-center  ">
  <li className="text-slate-900 dark:text-cyan-400 hover:text-cyan-500 font-medium dark:hover:text-cyan-300 transition-colors duration-300">
  <NavLink to="/">Home</NavLink>
</li>
    
    <li  className="text-slate-900 dark:text-cyan-400 hover:text-cyan-600 font-medium dark:hover:text-cyan-300 transition-colors duration-300 ease-in-out">
        <NavLink to="/project">Project</NavLink>
    </li>
    
    <li  className="text-slate-900 dark:text-cyan-400 hover:text-cyan-600 font-medium dark:hover:text-cyan-300 transition-colors duration-300 ease-in-out">
        <NavLink to="/about">About</NavLink>
    </li>
    
    <li  className="text-slate-900 font-medium dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300 ease-in-out">
        <NavLink to="blog">Blog</NavLink>
    </li>
    
    <li  className="text-slate-900 font-medium dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300 ease-in-out">
        <NavLink to="skill">Skills</NavLink>
    </li>
  
<li className="text-slate-900 dark:text-cyan-400 font-medium hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300 ease-in-out">
  <NavLink to="/reachout">Contact</NavLink>    
</li>

    <button onClick={toggleTheme} className=" cursor-pointer p-3 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-400 dark:border-cyan-400" >
        {darkMode ? (<Sun className="text-cyan-400 " size={20} />) : ( <Moon className="text-gray-700" size={20} /> )}
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