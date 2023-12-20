import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import { useState } from 'react';

const UpdateProduct = () => {
 const url = "https://6581773a3dfdd1b11c435754.mockapi.io/products/" 

const {state:item} = useLocation()
const [data , setData] = useState(item)
const navigate = useNavigate()

const handleData = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};

const handleSubmit = async(e)=>{
e.preventDefault()
try {
  await axios.put(`${url}${item.id}`,data)
navigate(-1);
} catch  (error) {
  console.log(error);
}

}


  return (
    <div className='container'>
       <ProductForm  handleData = {handleData}  handleSubmit={handleSubmit}  data={data} text = "New"/>
    </div>
  );
}

export default UpdateProduct