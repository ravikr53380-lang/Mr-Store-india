import { useState } from "react";

export default function MRStore() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Premium Casual Shirt",
      category: "Men",
      price: 499,
      oldPrice: 799,
      discount: "38% OFF",
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Stylish Cotton Shirt",
      category: "Men",
      price: 399,
      oldPrice: 699,
      discount: "43% OFF",
      img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Classic Blue Jeans",
      category: "Men",
      price: 899,
      oldPrice: 1299,
      discount: "31% OFF",
      img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Women's Fashion Dress",
      category: "Women",
      price: 699,
      oldPrice: 999,
      discount: "30% OFF",
      img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Women's Casual Top",
      category: "Women",
      price: 449,
      oldPrice: 699,
      discount: "36% OFF",
      img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Comfort Lower",
      category: "Men",
      price: 399,
      oldPrice: 599,
      discount: "33% OFF",
      img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>MR STORE <span>INDIA</span></div>

        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search shirts, jeans, dresses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchInput}
          />
          <span style={styles.searchIcon}>🔍</span>
        </div>

        <div style={styles.headerRight}>
          <button style={styles.headerButton}>👤 Login</button>
          <button style={styles.cartButton}>
            🛒 Cart ({cartItems})
          </button>
        </div>
      </header>

      <nav style={styles.navbar}>
        <span>Home</span>
        <span>Men</span>
        <span>Women</span>
        <span>Shirts</span>
        <span>Jeans</span>
        <span>New Arrivals</span>
        <span>Best Deals</span>
      </nav>

      <section style={styles.hero}>
        <div>
          <p style={styles.heroSmall}>WELCOME TO MR STORE INDIA</p>
          <h1 style={styles.heroTitle}>
            Fashion for <span>Everyone</span>
          </h1>
          <p style={styles.heroText}>
            Trendy fashion, great prices and styles for men & women.
          </p>

          <button style={styles.shopButton}>SHOP NOW →</button>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <p style={styles.smallTitle}>OUR COLLECTION</p>
            <h2 style={styles.sectionTitle}>Featured Products</h2>
          </div>
          <span style={styles.viewAll}>View All →</span>
        </div>

        <div style={styles.productGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.imageBox}>
                <img
                  src={product.img}
                  alt={product.name}
                  style={styles.productImage}
                />
                <span style={styles.discount}>{product.discount}</span>
              </div>

              <div style={styles.productInfo}>
                <p style={styles.category}>{product.category}</p>
                <h3 style={styles.productName}>{product.name}</h3>

                <div style={styles.priceRow}>
                  <strong style={styles.price}>₹{product.price}</strong>
                  <del style={styles.oldPrice}>₹{product.oldPrice}</del>
                </div>

                <button
                  style={styles.addButton}
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.cartSection}>
        <h2 style={styles.cartTitle}>🛒 Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div style={styles.emptyCart}>
            <div style={{ fontSize: "50px" }}>🛍️</div>
            <h3>Your cart is empty</h3>
            <p>Add some products to your cart to continue shopping.</p>
          </div>
        ) : (
          <div style={styles.cartContent}>
            <div>
              {cart.map((item) => (
                <div key={item.id} style={styles.cartItem}>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={styles.cartImage}
                  />

                  <div style={{ flex: 1 }}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>

                  <div style={styles.quantity}>
                    <button onClick={() => decreaseQty(item.id)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                  <button
                    style={styles.removeButton}
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div style={styles.summary}>
              <h3>Order Summary</h3>
              <div style={styles.summaryRow}>
                <span>Items</span>
                <span>{cartItems}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <button style={styles.checkoutButton}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        )}
      </section>

      <section style={styles.infoSection}>
        <div>
          <div style={styles.infoIcon}>🚚</div>
          <h3>Fast Delivery</h3>
          <p>Quick delivery at your doorstep.</p>
        </div>

        <div>
          <div style={styles.infoIcon}>🔒</div>
          <h3>Secure Shopping</h3>
          <p>Your shopping experience is safe.</p>
        </div>

        <div>
          <div style={styles.infoIcon}>💳</div>
          <h3>Easy Payment</h3>
          <p>Multiple payment options available.</p>
        </div>

        <div>
          <div style={styles.infoIcon}>↩️</div>
          <h3>Easy Returns</h3>
          <p>Simple return experience.</p>
        </div>
      </section>

      <footer style={styles.footer}>
        <div>
          <div style={styles.footerLogo}>MR STORE INDIA</div>
          <p>Fashion for everyone.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Men</p>
          <p>Women</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3>Customer Support</h3>
          <p>Help Center</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>📧 support@mrstoreindia.com</p>
          <p>🇮🇳 India</p>
        </div>
      </footer>

      <div style={styles.copyright}>
        © 2026 MR STORE INDIA. All Rights Reserved.
      </div>
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    background: "#f5f5f5",
    color: "#111",
    minHeight: "100vh",
  },

  header: {
    background: "#111",
    color: "#fff",
    padding: "18px 6%",
    display: "flex",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "800",
    whiteSpace: "nowrap",
  },

  logoSpan: {
    color: "#ccc",
  },

  searchBox: {
    flex: 1,
    minWidth: "250px",
    position: "relative",
  },

  searchInput: {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 45px 13px 18px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
    fontSize: "15px",
  },

  searchIcon: {
    position: "absolute",
    right: "15px",
    top: "11px",
    fontSize: "18px",
  },

  headerRight: {
    display: "flex",
    gap: "10px",
  },

  headerButton: {
    background: "transparent",
    border: "1px solid #555",
    color: "#fff",
    padding: "11px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  cartButton: {
    background: "#fff",
    color: "#111",
    border: "none",
    padding: "11px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  navbar: {
    background: "#fff",
    padding: "15px 6%",
    display: "flex",
    justifyContent: "center",
    gap: "45px",
    borderBottom: "1px solid #ddd",
    flexWrap: "wrap",
    fontWeight: "600",
  },

  hero: {
    background:
      "linear-gradient(120deg, #111 0%, #333 60%, #555 100%)",
    color: "#fff",
    padding: "75px 8%",
  },

  heroSmall: {
    letterSpacing: "3px",
    fontSize: "13px",
    color: "#ccc",
  },

  heroTitle: {
    fontSize: "55px",
    margin: "10px 0",
    maxWidth: "650px",
  },

  heroText: {
    fontSize: "18px",
    color: "#ddd",
    maxWidth: "600px",
  },

  shopButton: {
    marginTop: "20px",
    padding: "14px 28px",
    background: "#fff",
    color: "#111",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  section: {
    padding: "55px 6%",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "25px",
  },

  smallTitle: {
    fontSize: "12px",
    letterSpacing: "2px",
    fontWeight: "bold",
    color: "#777",
    margin: 0,
  },

  sectionTitle: {
    fontSize: "32px",
    margin: "6px 0",
  },

  viewAll: {
    fontWeight: "bold",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "25px",
  },

  productCard: {
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },

  imageBox: {
    position: "relative",
    height: "290px",
    overflow: "hidden",
    background: "#eee",
  },

  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  discount: {
    position: "absolute",
    top: "12px",
    left: "12px",
    background: "#111",
    color: "#fff",
    padding: "6px 9px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  productInfo: {
    padding: "18px",
  },

  category: {
    fontSize: "12px",
    color: "#777",
    margin: "0 0 6px",
  },

  productName: {
    margin: "0 0 12px",
    fontSize: "18px",
  },

  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },

  price: {
    fontSize: "20px",
  },

  oldPrice: {
    color: "#888",
  },

  addButton: {
    width: "100%",
    padding: "12px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  cartSection: {
    padding: "50px 6%",
    background: "#fff",
  },

  cartTitle: {
    fontSize: "30px",
  },

  emptyCart: {
    textAlign: "center",
    padding: "50px",
    background: "#f7f7f7",
    borderRadius: "8px",
  },

  cartContent: {
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: "30px",
  },

  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "15px",
    borderBottom: "1px solid #ddd",
  },

  cartImage: {
    width: "80px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "5px",
  },

  quantity: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  quantityButton: {
    width: "30px",
    height: "30px",
  },

  removeButton: {
    border: "none",
    background: "transparent",
    color: "#777",
    cursor: "pointer",
  },

  summary: {
    background: "#f5f5f5",
    padding: "25px",
    borderRadius: "8px",
    height: "fit-content",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #ddd",
  },

  checkoutButton: {
    width: "100%",
    marginTop: "20px",
    padding: "14px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  infoSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "25px",
    padding: "45px 6%",
    textAlign: "center",
    background: "#eee",
  },

  infoIcon: {
    fontSize: "32px",
  },

  footer: {
    background: "#111",
    color: "#fff",
    padding: "50px 6%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "35px",
  },

  footerLogo: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  copyright: {
    background: "#000",
    color: "#aaa",
    textAlign: "center",
    padding: "18px",
    fontSize: "13px",
  },
};
