import React from 'react'
import gemini from "../../assets/img/gemini-thumbnail.png";
import tilik from "../../assets/img/tilik-thumbnail.png";


const Projects = () => {
  return (
<div class=" py-10"> 
  <div class="container mx-auto text-center">
    <h2 class="text-3xl text-yellow-300 font-bold mb-8">Project I Made</h2>
    {/* <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">  */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-7'>

     <div class="bg-white rounded-2xl shadow-md w-full py-1">
      <img src={gemini} alt="Project Two" class="rounded-xl mb-4"/>
        <h2 class="text-xl font-semibold mb-2">Gemini Clone App</h2>
        <p className="text-gray-500">
        React application powered by the Gemini API, featuring a sleek Tailwind CSS interface. It allows users to interact with an AI chatbot, showcasing the integration of advanced language models in a responsive web environment.  
          </p>
        <div class="flex justify-center space-x-4 gap-2">
          <a href="https://github.com/kumsa-Mergia/gemini-clone" class="bg-black hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded">Github</a>
          <a href="https://clone-gemini-app.netlify.app/" class="bg-blue-500 hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded">Live Demo</a>
        </div>
      </div> 

      <div class="bg-white rounded-2xl shadow-md w-full py-1">
      <img src={tilik} alt="Project Two" class="rounded-xl mb-4"/>
        <h2 class="text-xl font-semibold mb-2">TilikGym</h2>
        <p className="text-gray-500">
        TilikGym is a modern and fully responsive gym website built using React.js and Tailwind CSS. It is designed to provide a smooth user experience with fast performance. The project features an interactive UI with animations, ensuring seamless navigation across all devices.   
          </p>
          <div class="flex justify-center gap-2 space-x-4">
          <a href="https://github.com/kumsa-Mergia/Gym-Website-with-ReactJS-Tailwind-CSS" class="bg-black hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded">Github</a>
          <a href="https://tilikgym.netlify.app/" class="bg-blue-500 hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded">Live Demo</a>
        </div>
      </div>      

    </div>
  </div>
</div>
  )
}

export default Projects
