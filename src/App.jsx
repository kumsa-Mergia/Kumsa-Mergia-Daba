import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import AppRoutes from './Routes/AppRoutes';
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className="p-8 ">
      {/* <Navbar />
      <Home />
         <hr className='p-8 text-yellow-300 font-bold'/>
      <About /> */}
      <BrowserRouter> {/* Use BrowserRouter here */}
        <Navbar />
        <AppRoutes />
        <hr className=" border-b-1 text-yellow-300"/>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
