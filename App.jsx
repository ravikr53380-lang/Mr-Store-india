import { useState } from "react";

export default function MRStore() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Premium Shirt",
      price: 499,
      oldPrice: 799,
      discount: "38% OFF",
      img: "https://via.placeholder.com/400x450?text=Shirt",
    },
    {
      id: 2,
      name: "Classic T-Shirt",
      price: 299,
      oldPrice: 499,
      discount: "40% OFF",
      img: "https://via.placeholder.com/400x450?text=T-Shirt",
    },
    {
      id: 3,
      name: "Stylish Jeans",
      price: 999,
      oldPrice: 1499,
      discount: "33% OFF",
      img: "https://via.placeholder.com/400x450?text=Jeans",
    },
    {
      id: 4,
      name: "Ladies Plaza",
      price: 699,
      oldPrice: 999,
      discount: "30% OFF",
      img: "https://via.placeholder.com/400x450?text=Plaza",
    },
    {
      id: 5,
      name: "Comfort Lower",
      price: 399,
      oldPrice: 599,
      discount: "33% OFF",
      img: "https://via.placeholder.com/400x450?text=Lower",
    },
  ];

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#000000",
          borderBottom: "1px solid #333",
          padding: "18px 25px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "25px",
              letterSpacing: "1px",
            }}
          >
            MR STORE INDIA
          </h1>

          <div
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              padding: "10px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            🛒 Cart ({totalItems})
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "55px 20px",
          background:
            "linear-gradient(135deg, #000000, #1c1c1c, #000000)",
        }}
      >
        <p
          style={{
            color: "#bbbbbb",
            fontSize: "14px",
            letterSpacing: "2px",
          }}
        >
          WELCOME TO
        </p>

        <h2
          style={{
            fontSize: "38px",
            margin: "10px 0",
          }}
        >
          MR STORE INDIA
        </h2>

        <p
          style={{
            color: "#cccccc",
            fontSize: "18px",
          }}
        >
          Fashion for Men & Women
        </p>

        <div
          style={{
            display: "inline-block",
            marginTop: "15px",
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "10px 18px",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          🔥 Best Fashion Deals
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "40px 20px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "22px",
            marginTop: "25px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                width: "210px",
                backgroundColor: "#151515",
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <h3>{product.name}</h3>

              <div style={{ marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  ₹{product.price}
                </span>

                <span
                  style={{
                    marginLeft: "8px",
                    color: "#888",
                    textDecoration: "line-through",
                  }}
                >
                  ₹{product.oldPrice}
                </span>
              </div>

              <p
                style={{
                  color: "#bbbbbb",
                  margin: "5px 0 12px",
                }}
              >
                {product.discount}
              </p>

              <button
                onClick={() => addToCart(product)}
                style={{
                  width: "100%",
                  padding: "11px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  border: "none",
                  borderRadius: "7px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CART */}
      <section
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#151515",
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "25px",
          }}
        >
          <h2>🛒 Your Cart</h2>

          {cart.length === 0 ? (
            <p style={{ color: "#aaa" }}>
              Your cart is empty.
            </p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #333",
                    padding: "18px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h3 style={{ margin: "0 0 5px" }}>
                      {item.name}
                    </h3>

                    <p style={{ margin: 0, color: "#aaa" }}>
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      style={{
                        padding: "7px 12px",
                        cursor: "pointer",
                      }}
                    >
                      −
                    </button>

                    <span
                      style={{
                        margin: "0 12px",
                        fontWeight: "bold",
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      style={{
                        padding: "7px 12px",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        marginLeft: "12px",
                        padding: "7px 12px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>
                </div>
              ))}

              <div
                style={{
                  textAlign: "right",
                  marginTop: "20px",
                }}
              >
                <h2>Total: ₹{totalPrice}</h2>

                <button
                  style={{
                    padding: "13px 25px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "none",
                    borderRadius: "7px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* LOGIN */}
      <section
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          padding: "25px",
        }}
      >
        <div
          style={{
            backgroundColor: "#151515",
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "25px",
          }}
        >
          <h2>Login</h2>

          <input
            placeholder="Email"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              marginBottom: "12px",
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: "6px",
            }}
          />

          <input
            placeholder="Password"
            type="password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              marginBottom: "12px",
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: "6px",
            }}
          />

          <button
            style={{
              padding: "11px 22px",
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          padding: "25px",
        }}
      >
        <div
          style={{
            backgroundColor: "#151515",
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "25px",
          }}
        >
          <h2>Contact Us</h2>

          <input
            placeholder="Your Name"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              marginBottom: "12px",
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: "6px",
            }}
          />

          <input
            placeholder="Your Email"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              marginBottom: "12px",
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: "6px",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              marginBottom: "12px",
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: "6px",
              resize: "vertical",
            }}
          />

          <button
            style={{
              padding: "11px 22px",
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "25px",
          borderTop: "1px solid #333",
          color: "#888",
          marginTop: "30px",
        }}
      >
        <p>© 2026 MR STORE INDIA</p>
        <p>Fashion for Everyone</p>
      </footer>
    </div>
  );
}
