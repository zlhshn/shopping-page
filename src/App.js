
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {

  

  return (
    <div className="bg-light app">
      
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Main/>}></Route>
        <Route path="/about" element= {<About/>}></Route>
        <Route path="/newproduct" element= {<NewProduct/>}></Route>
        <Route path="/productlist" element= {<ProductList/>}></Route>
      
      
      
      
      </Routes>
    </div>
  );
}

export default App;
