
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UpdateProduct from "./pages/UpdateProduct";

function App() {

  

  return (
    <div>
      
      <Navbar/>
      <Routes>

       
        <Route path="/" element= {<Main/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/newproduct" element= {<NewProduct/>}/>
        <Route path="/productlist" element= {<ProductList/>}/>
        <Route path="/update" element = {<UpdateProduct/>}/>
      
      
      
      
      </Routes>
    </div>
  );
}

export default App;
