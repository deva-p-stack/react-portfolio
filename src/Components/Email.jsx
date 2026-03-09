import {CircleArrowRight} from 'lucide-react';

export default function Email() {

return(
    <>
    
    <section className="flex min-h-[50vh] w-full max-w-[1440px] flex-col   bg-white dark:bg-slate-950 justify-center items-center space-y-10">
  <h3 className="text-lg text-amber-950  tracking-wider dark:text-cyan-500  text-black">Want to start a project ?</h3>
  <h3 className="md:text-6xl text-3xl font-semibold tracking-widest dark:text-cyan-400/80 text-black  ">Let's have a chat</h3>
  <button  type="button" className="flex text-md tracking-widest gap-3 px-6 py-3 hover:bg-cyan-400/80 hover:text-black  hover:cursor-pointer hover:scale-[0.98]  active:scale-[1.02] hover:shadow-xs font-semibold transition-all duration-300 ease-in-out hover:shadow-cyan-400 dark:text-cyan-400 border border-cyan-500 rounded-lg">
    Click to reveal email <CircleArrowRight></CircleArrowRight>
  </button>
</section>
    
    </>
);


}