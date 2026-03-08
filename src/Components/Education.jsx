import { LiaChevronCircleLeftSolid } from 'react-icons/lia';
    import image from '../assets/linkedin.png'
    import clone from '../assets/clone.png'

import { Link,Code  } from 'lucide-react';

export default function Education (){

    const projects = [
  {
    id:1,
    title: "Linkedin Clone Page",
    description:
      "A modern LinkedIn clone designed to replicate the key features of the professional networking website. This project shows clean frontend programming, component-based architecture, and responsive user interface design.",
    badge: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: image,
    buttons: [{
        name: "Live Website",
        url: "https://deva-p-stack.github.io/linkedin/",
        icon: Link,},
      {
        name: "Source Code",
        url: "https://github.com/deva-p-stack/linkedin/",
        icon: Code,},],
  },
  {
    id:2,
  title:"Github Clone Page",
    description:
     "A modern Github clone designed to replicate the key features of the professional networking website. This project shows clean frontend programming, component-based architecture, and responsive user interface design.",
    badge: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image:clone,
    buttons: [{
        name: "Live Website",
        url: "https://deva-p-stack.github.io/github-clone/",
        icon: Link,},
      {
        name: "Source Code",
        url: "https://github.com/deva-p-stack/github-clone/",
        icon: Code,},],
    }
];
 


return(
<>



<section className=" min-h-screen w-full max-w-[1440px] dark:bg-slate-950 flex flex-col justify-center items-center space-y-4 px-10 py-5 ">

<div className="">
<h2 className="text-5xl text-center  text-gray-900/90 font-bold tracking-wider pb-5 dark:text-cyan-500  "> My Projects </h2>
</div>




{/* container */}
<div className="min-h-screen w-full max-w-[1440px]  grid grid-cols-1 mx-auto gap-5 pr-5 md:pl-15 ">

  {/* container */}
 {projects.map((item,index)=>{

return (

 <div  key={index} className=" rounded-2xl p-5 grid grid-cols-1  md:grid-cols-2 gap-5 h-auto">

    {/* left  */}
    <div className="w-full flex justify-center items-center">
      <img
        src={item.image}
        alt="linkedin_profile_images"
        className="rounded-2xl object-cover  dark:opacity-80 w-full h-full"
      />
    </div>

    {/* right  */}
<div className="w-full h-full p-6 rounded-2xl flex flex-col justify-center bg-white/70 dark:bg-slate-950 backdrop-blur-lg


dark:hover:shadow-cyan-500/30 hover:scale-[1.01]  transition-all duration-300 ease-in-out">
    <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-3 
text-gray-900 dark:text-gray-100">
  {item.title}
</h2>

<p className="text-gray-950 dark:text-gray-400 leading-relaxed text-sm md:text-base max-w-lg text-justify py-2">
{item.description}
</p>
      {/* bladges */}
     <ul className="px-2 py-2 rounded md:flex-row lg:flex-row gap-6 text-center  text-xs flex flex-col">



{item.badge.map((badge,index)=>(
  <li key={index}
  className="px-5 py-2 rounded-full border border-black dark:border-cyan-400 
  cursor-pointer tracking-widest hover:dark:text-white dark:text-cyan-500
  shadow-sm dark:shadow-cyan-500/20
  hover:bg-black hover:text-white 
  dark:hover:bg-cyan-500 
  hover:shadow-lg dark:hover:shadow-cyan-500/40
  hover:scale-105 active:scale-95
  transition-all duration-300 ease-in-out">
    {badge}
  </li>
))}
  

</ul>
{/* link for website   */}


<ul className='  py-3 flex gap-4  '>
 {item.buttons.map((btn, index) => {
    const Icon = btn.icon;
  return (
      <li
        key={index}
        className="flex justify-center items-center gap-2 
        hover:translate-x-1 transition-all duration-300 
        ease-in-out cursor-pointer dark:text-cyan-500"
      >
        <Icon size={20} />
        <a href={btn.url} target="_blank" rel="noopener noreferrer">
          {btn.name}
        </a>
      </li>
   
 )})}
</ul>





{/* right div end below */}
    </div>

  </div>





)})}





</div>









</section>
  



</>
);}