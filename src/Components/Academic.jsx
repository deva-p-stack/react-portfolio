export default function Academic(){

    return(
<>


<section className=" min-h-screen w-full max-w-[1440px] dark:bg-slate-950 flex flex-col  space-y-4 p-5 ">

<div className="">
<h2 className="text-5xl text-center  text-gray-900/90 font-bold tracking-wider pb-5 dark:text-cyan-500  ">  My Journey</h2>
</div>

{/* container */}

<div className="flex justify-around px-5 pt-5 pb-20 md:flex-row flex-col space-y-10">

{/*  */}
{/* left */}
<div className="space-y-10 relative px-10">
     <h3 className="text-gray-950 font-bold text-2xl dark:text-cyan-500 tracking-wider ">Education</h3>

  
  {/* line bordrer */}
    <div className="border-l-2 border-black dark:border-cyan-400 absolute h-[70%] top-[6.2rem] left-16 -z-10"></div>
    
        <div className="flex gap-x-7 items-center overflow-hidden max-sm:gap-x-3">
            
            <div className="bg-custom-green inline-block rounded-full p-1 transition-all duration-2000 transform opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-cyan-400 rounded-full p-2" width="3rem" height="3rem" viewBox="0 0 64 64"><path fill="currentColor" d="M18.49 34.333v-1.597l.479-.22L32 38.486l30-13.743L32 11L2 24.743l13.63 6.243a1.8 1.8 0 0 0-.122.629v1.352l-2.38-1.09v4.62c0 1.368.367 2.596.997 3.7v10.271c0 3.375 5.75 3.375 5.75 0v-5.556c10.852 4.821 30.996 2.024 30.996-8.416v-4.62L32 40.521zm.385 16.136c0 .357-.232.678-.598.904V38.696l-.197.134v12.652l-.59.181V39.061l-.195.035v12.596h-.59V39.096l-.197-.035v12.603l-.588-.181V38.83l-.197-.134v12.677c-.365-.227-.598-.547-.598-.904V38.486c0-1.146.588-2.102 1.383-2.391v-4.48c0-.305.152-.533.361-.628l15-6.873a.4.4 0 0 1 .164-.039c.478 0 .634 1.05.098 1.296L17.49 32.077v4.018c.796.287 1.385 1.243 1.385 2.391z"></path></svg>
                </div>

                <div className="transition-all duration-2000 transform translate-x-0 opacity-100">    
                      <p className="text-custom-green text-gray-500 font-bold max-sm:text-sm">2024 - 2026</p>
                    <h5 className=" text-gray-500 text-xl font-bold max-sm:text-base">M.sc - Computer Science</h5>
                    <p className="text-gray-500 max-sm:text-xs">Loyola College, Nungambakkam, Chennai</p>
                    </div>

                    </div>
                    <div className="flex gap-x-7 items-center overflow-hidden max-sm:gap-x-3">
                    <div className="bg-custom-green inline-block rounded-full p-1 transition-all duration-2000 transform opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bg-cyan-400 rounded-full p-2" width="3rem" height="3rem" viewBox="0 0 64 64"><path fill="currentColor" d="M18.49 34.333v-1.597l.479-.22L32 38.486l30-13.743L32 11L2 24.743l13.63 6.243a1.8 1.8 0 0 0-.122.629v1.352l-2.38-1.09v4.62c0 1.368.367 2.596.997 3.7v10.271c0 3.375 5.75 3.375 5.75 0v-5.556c10.852 4.821 30.996 2.024 30.996-8.416v-4.62L32 40.521zm.385 16.136c0 .357-.232.678-.598.904V38.696l-.197.134v12.652l-.59.181V39.061l-.195.035v12.596h-.59V39.096l-.197-.035v12.603l-.588-.181V38.83l-.197-.134v12.677c-.365-.227-.598-.547-.598-.904V38.486c0-1.146.588-2.102 1.383-2.391v-4.48c0-.305.152-.533.361-.628l15-6.873a.4.4 0 0 1 .164-.039c.478 0 .634 1.05.098 1.296L17.49 32.077v4.018c.796.287 1.385 1.243 1.385 2.391z"></path></svg>
                    </div>
                
                
                <div className="transition-all duration-2000 transform translate-x-0 opacity-100">
                                <p className="text-custom-green text-gray-500 font-bold max-sm:text-sm">2019 - 2022</p>
                                <h5 className="text-xl font-bold  text-gray-500 max-sm:text-base">B.sc - Computer Science</h5>
                                <p className=" text-gray-500 max-sm:text-xs">Dr. M.G.R. Chockalingam Arts College, Arani</p>
                    </div>
                    </div>

                    <div className="flex gap-x-7 items-center overflow-hidden max-sm:gap-x-3">
                        <div className="bg-custom-green inline-block rounded-full p-1 transition-all duration-2000 transform opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-cyan-400 rounded-full p-2" width="3rem" height="3rem"viewBox="0 0 64 64"><path fill="currentColor" d="M18.49 34.333v-1.597l.479-.22L32 38.486l30-13.743L32 11L2 24.743l13.63 6.243a1.8 1.8 0 0 0-.122.629v1.352l-2.38-1.09v4.62c0 1.368.367 2.596.997 3.7v10.271c0 3.375 5.75 3.375 5.75 0v-5.556c10.852 4.821 30.996 2.024 30.996-8.416v-4.62L32 40.521zm.385 16.136c0 .357-.232.678-.598.904V38.696l-.197.134v12.652l-.59.181V39.061l-.195.035v12.596h-.59V39.096l-.197-.035v12.603l-.588-.181V38.83l-.197-.134v12.677c-.365-.227-.598-.547-.598-.904V38.486c0-1.146.588-2.102 1.383-2.391v-4.48c0-.305.152-.533.361-.628l15-6.873a.4.4 0 0 1 .164-.039c.478 0 .634 1.05.098 1.296L17.49 32.077v4.018c.796.287 1.385 1.243 1.385 2.391z"></path>
                            </svg>
                            </div>
                            <div className="transition-all duration-2000 transform translate-x-0 opacity-100">
                                  <p className="text-custom-green text-gray-500 font-bold max-sm:text-sm">2004 - 2019</p>
                                <h5 className="text-xl font-bold  text-gray-500 max-sm:text-base">SCHOOLING</h5>
                                <p className=" text-gray-500 text-xs">Kingston Matri. Hr. Sec. School</p>
                              
</div>
</div>
</div>

{/* right */}
<div className="space-y-10 relative px-10">
         <h3 className="text-gray-950 font-bold text-2xl dark:text-cyan-500 tracking-wider ">Working Experience</h3>
   
     
  {/* line bordrer */}
    <div className="border-l-2 border-black dark:border-cyan-400 absolute h-[60%] lg:top-[5.2rem] top-[8.8rem] left-16 -z-10"></div>
    

        <div className="flex gap-x-7 items-center overflow-hidden max-sm:gap-x-3">
            <div className="bg-custom-green inline-block rounded-full p-1 transition-all duration-2000 transform opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-cyan-400 rounded-full p-2" width="3rem" height="3rem" viewBox="0 0 64 64"><path fill="currentColor" d="M18.49 34.333v-1.597l.479-.22L32 38.486l30-13.743L32 11L2 24.743l13.63 6.243a1.8 1.8 0 0 0-.122.629v1.352l-2.38-1.09v4.62c0 1.368.367 2.596.997 3.7v10.271c0 3.375 5.75 3.375 5.75 0v-5.556c10.852 4.821 30.996 2.024 30.996-8.416v-4.62L32 40.521zm.385 16.136c0 .357-.232.678-.598.904V38.696l-.197.134v12.652l-.59.181V39.061l-.195.035v12.596h-.59V39.096l-.197-.035v12.603l-.588-.181V38.83l-.197-.134v12.677c-.365-.227-.598-.547-.598-.904V38.486c0-1.146.588-2.102 1.383-2.391v-4.48c0-.305.152-.533.361-.628l15-6.873a.4.4 0 0 1 .164-.039c.478 0 .634 1.05.098 1.296L17.49 32.077v4.018c.796.287 1.385 1.243 1.385 2.391z"></path></svg></div>
                <div className="transition-all duration-2000 transform translate-x-0 opacity-100">
                    <p className="text-custom-green font-semibold  text-gray-500">2026 - Present</p>
                    <h5 className="text-xl font-semibold  text-gray-500">Fullstack  Engineer Intern</h5>
                    <p className="text-gray-500 text-xs">CyberDude Networks.Pvt.Ltd</p>
                    </div>  
                    </div>
                    <div className="flex gap-x-7 items-center overflow-hidden max-sm:gap-x-3">
                        <div className="bg-custom-green inline-block rounded-full p-1 transition-all duration-2000 transform opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-cyan-400 rounded-full p-2" width="3rem" height="3rem" viewBox="0 0 64 64"><path fill="currentColor" d="M18.49 34.333v-1.597l.479-.22L32 38.486l30-13.743L32 11L2 24.743l13.63 6.243a1.8 1.8 0 0 0-.122.629v1.352l-2.38-1.09v4.62c0 1.368.367 2.596.997 3.7v10.271c0 3.375 5.75 3.375 5.75 0v-5.556c10.852 4.821 30.996 2.024 30.996-8.416v-4.62L32 40.521zm.385 16.136c0 .357-.232.678-.598.904V38.696l-.197.134v12.652l-.59.181V39.061l-.195.035v12.596h-.59V39.096l-.197-.035v12.603l-.588-.181V38.83l-.197-.134v12.677c-.365-.227-.598-.547-.598-.904V38.486c0-1.146.588-2.102 1.383-2.391v-4.48c0-.305.152-.533.361-.628l15-6.873a.4.4 0 0 1 .164-.039c.478 0 .634 1.05.098 1.296L17.49 32.077v4.018c.796.287 1.385 1.243 1.385 2.391z"></path></svg>
                </div>
                <div className="transition-all duration-2000 transform translate-x-0 opacity-100">
                    <p className="text-custom-green text-gray-500 font-bold ">2025 </p>
                    <h5 className="text-gray-500 text-xl font-semibold"> Java Fullstack Intern</h5>      
                    <p className="text-gray-500 text-xs">Retech solutions.Pvt.Ltd</p>
                    </div>
                    </div>
                    <div className="flex gap-x-7 items-center overflow-hidden max-sm:gap-x-3">
                        <div className="bg-custom-green inline-block rounded-full p-1 transition-all duration-2000 transform opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-cyan-400 rounded-full p-2" width="3rem" height="3rem"viewBox="0 0 64 64"><path fill="currentColor" d="M18.49 34.333v-1.597l.479-.22L32 38.486l30-13.743L32 11L2 24.743l13.63 6.243a1.8 1.8 0 0 0-.122.629v1.352l-2.38-1.09v4.62c0 1.368.367 2.596.997 3.7v10.271c0 3.375 5.75 3.375 5.75 0v-5.556c10.852 4.821 30.996 2.024 30.996-8.416v-4.62L32 40.521zm.385 16.136c0 .357-.232.678-.598.904V38.696l-.197.134v12.652l-.59.181V39.061l-.195.035v12.596h-.59V39.096l-.197-.035v12.603l-.588-.181V38.83l-.197-.134v12.677c-.365-.227-.598-.547-.598-.904V38.486c0-1.146.588-2.102 1.383-2.391v-4.48c0-.305.152-.533.361-.628l15-6.873a.4.4 0 0 1 .164-.039c.478 0 .634 1.05.098 1.296L17.49 32.077v4.018c.796.287 1.385 1.243 1.385 2.391z"></path>
                            </svg>
                            </div>
                            <div className="transition-all duration-2000 transform translate-x-0 opacity-100">
                                <p className="text-custom-green text-gray-500 font-bold ">2023</p>
                                <h5 className="text-xl font-semibold  text-gray-500 ">TTC </h5>
                            <p className="text-gray-500 text-xs ">Vandavasi</p>
</div>
</div>
</div>
</div>

</section>
</>

    );
}