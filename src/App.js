import { BrowserRouter  , Switch , Routes ,Route, Link}  from "react-router-dom";
import './App.css';
import logo from './logo2.svg'
import Formm from './Form';
import Home from './ho';
import Loginn from './login';
import React from "react";


function App() {
  return (
 
    
<BrowserRouter>
<Routes>
    <Route path="/" element={<Formm/>}/>
    <Route path="/login" element={<Loginn/>}/>
    <Route path="/ho" element={<Home/>}/>


</Routes>
</BrowserRouter>

  );
}

export default App;
