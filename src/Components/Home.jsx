import AOS from "aos";
import logo from "../assets/devaprabhu.jpg";

export default function Home(){


  

return(

<>

<section className=" w-full min-h-screen   dark:bg-slate-950 ">

<div className="w-full max-w-[1440px] pt-20 flex  mx-auto md:flex-row justify-center items-center px-4 sm:px-6 lg:px-30 flex-col ">

{/* left side  */}
<div className="flex  justify-center items-center  pl-0">
  <img data-aos="fade-right" className=" rounded-full w-[40%] object-fill border-cyan-500 border border-2  opacity-85 "   src={logo} alt="devaprabhu" />

  
<div className=" pl-10 space-y-3">
<h3 className="text-7xl font-semibold text-slate-900 dark:text-slate-100">
  Hi, I am <span className="text-cyan-400">Devaprabhu</span>.
</h3>

<h1 className="text-3xl font-medium text-slate-700 dark:text-slate-300 mt-2">
  Web Developer | ML Enthusiast
</h1>

<p className="text-xl text-slate-600 dark:text-slate-400 mt-3 max-w-xl">
  I enjoy learning, experimenting, and building meaningful digital experiences.
</p>
</div>
</div>




{/* right side */}
<div className="">



</div>





{/* parent div end below */}
</div>
</section>



</>

);

}