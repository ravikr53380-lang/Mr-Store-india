import { useState } from "react";

export default function MRStore() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Shirt", price: 499, img: "https://via.placeholder.com/200" },
    { id: 2, name: "T-Shirt", price: 299, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Jeans", price: 999, img: "https://via.placeholder.com/200" },
    { id: 4, name: "Plaza", price: 699, img: "https://via.placeholder.com/200" },
    { id: 5, name: "Lower", price: 399, img: "https://via.placeholder.com/200" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>MR STORE INDIA</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>Welcome to MR STORE INDIA</h2>
        <p>Best Fashion Deals for You</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", width: "200px", textAlign: "center" }}>
            <img src={product.img} alt={product.name} style={{ width: "100%", marginBottom: "10px" }} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <p key={index}>{item.name} - ₹{item.price}</p>
          ))
        )}
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Login</h2>
        <input placeholder="Email" /><br /><br />
        <input placeholder="Password" type="password" /><br /><br />
        <button>Login</button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Contact Us</h2>
        <input placeholder="Your Name" /><br /><br />
        <input placeholder="Your Email" /><br /><br />
        <input placeholder="Message" /><br /><br />
        <button>Submit</button>
      </div>
    </div>
  );
}
