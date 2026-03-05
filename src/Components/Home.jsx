import logo from "../assets/devaprabhu.jpg";

export default function Home(){


return(

<>

<section className=" w-full min-h-screen   dark:bg-slate-900 ">

<div className="w-full max-w-[1440px] pt-20 flex  mx-auto md:flex-row justify-center items-center px-4 sm:px-6 lg:px-30 flex-col ">

{/* left side  */}
<div className="flex  justify-center items-center ">
  <img className="rounded-full object-fill opacity-85 "   src={logo} alt="devaprabhu" />

  
<div className=" pl-10 space-y-3">

<h3 className=" text-7xl font-semibold dark:text-gray-100/60">Hi, I am Devaprabhu. </h3>
<h1 className="text-3xl dark:text-gray-100/30 font-medium ">WebDeveloper | Ml enthusiastic</h1>
 <p className="text-xl dark:text-gray-100/10 ">I enjoy learning, experimenting, and building meaningful digital experiences </p>
  
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