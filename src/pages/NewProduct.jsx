import React from "react";
import ProductForm from "../components/ProductForm";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    price: "",
    amount: 1,
  });
  const { name, image, price, amount } = data;

  const postProduct = async (newProduct) => {
    try {
      await axios.post(
        "https://6581773a3dfdd1b11c435754.mockapi.io/products/",
        newProduct
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, image, price, amount };
    postProduct(newProduct);
    setData({
      name: "",
      image: "",
      price: "",
      amount: "",
    });

    Swal.fire({
      title: "SUCCESS!",
      text: "Your product add  product list",
      icon: "success",
      iconColor: "green",
      confirmButtonText: "Cool",
    });
  };

  const handleData = (e) => {
    // console.log(e.target.id)
    // console.log(e.target.name)
    //? objemizin key Degerinin degisken olmasını saglamak için square bracket yontemi ile e.target.id parametresini kullandik
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container new">
      <ProductForm
        handleSubmit={handleSubmit}
        data={data}
        handleData={handleData}
      />
    </div>
  );
};

export default NewProduct;
