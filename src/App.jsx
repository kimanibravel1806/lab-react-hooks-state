import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [cart, setCart] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const items = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Bread", category: "Bakery" },
    { id: 3, name: "Cheese", category: "Dairy" },
    { id: 4, name: "Apple", category: "Fruits" },
    { id: 5, name: "Banana", category: "Fruits" },
  ];

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  function addToCart(item) {
    setCart([...cart, item]);
  }

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Shopping App</h1>

      {/* Dark Mode Button */}
      <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <br />
      <br />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
      </select>

      <h2>Items</h2>

      {filteredItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - {item.category}
          </p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} is in your cart.
        </p>
      ))}
    </div>
  );
}

export default App;