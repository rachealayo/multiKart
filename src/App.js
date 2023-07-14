import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./component/Header/header";
import Home from "./component/Home/home";
import Shop from "./component/Shop/shop";
import Feature from "./component/Home/features";


const App = () => {
  return(
   <BrowserRouter>
       <Header/> 
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Shop" element={<Shop/>}/>
           {/* <Route path="/Contact" element={<Contact/>}/> */}
           <Route path="/Feature" element={<Feature/>}/>
         </Routes>

    </BrowserRouter>
    //  <div>
    //   <Header/>
    //   <Home/>
    //  </div> 
    
  )
};

export default App;