import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import loadingImage from "../assets/spinner.gif";
import cart from "../assets/cart.png"

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [error ,setError] = useState(false)

  const getProducts = async () => {
   
    try {
      const res = await axios(
        "https://6581773a3dfdd1b11c435754.mockapi.io/products/"
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
      setError(true)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className=" mt-3 text-center">
        <img src={loadingImage} alt="loading" />
      </div>
    );
  } else if(error){

    return (
      <div className="container mt-3 text-center">
        <div className={"bg-light d-sm-block d-md-flex"}>
        <p>Error...</p>
       </div>
      </div>
    );
  }else {
    if (product?.length > 0) {
      return (
        <div className="container mt-3">
          <div className="d-sm-block d-md-flex">
            <>
              <article id="product-panel" className="col-md-5">
                {product?.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    getProducts={getProducts}
                  />
                ))}
              </article>
              <article className="col-md-5 m-3">
                <CardTotal product={product} />
              </article>
            </>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mt-3 nodata">
          {" "}
          <p className="text-center text-danger w-100">
            No products data...
            <img src={cart} className="cartimg" />
          </p>{" "}
        </div>
      );
    }

    
  }

 
};

export default ProductList;
