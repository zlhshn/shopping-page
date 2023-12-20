import axios from "axios";
import { useState } from "react";

const ProductForm = () => {
  const [data, setData] = useState({
    name: "",
    image: "",
    price: "",
    amount: 1,
  });
  const {name,image,price,amount} = data


  const postProduct = async (newProduct) => {
    try {
      await axios.post(
        "https://6581773a3dfdd1b11c435754.mockapi.io/products/",
        newProduct
      );
    } catch (error) {}
  };

  const handleSubmit = (e)=>{
e.preventDefault()
const newProduct = {name,image,price,amount}
postProduct(newProduct)
setData({
  name: "",
  image: "",
  price: "",
  amount: "",
})

  }

  const handleData = (e) => {
    // console.log(e.target.id)
    // console.log(e.target.name)
    //? objemizin key Degerinin degisken olmasını saglamak için square bracket yontemi ile e.target.id parametresini kullandik
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="text-center">Product</h1>
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="add-name"
            required
            onChange={handleData}
            name="name"
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="add-price"
            onChange={handleData}
            name="price"
            value={price}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="add-quantity"
            required
            onChange={handleData}
            name="amount"
            value={amount}
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="add-image"
            aria-describedby="basic-addon3"
            required
            onChange={handleData}
            name="image"
            value={image}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
