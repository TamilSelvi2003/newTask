import { useState } from "react";

const App = () => {
  const items = ["Apple", "Banana", "Cherry", "Grapes", "Mango", "Orange", "Strawberry"];

  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Search Bar Example</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index} style={{ padding: "5px" }}>{item}</li>)
        ) : (
          <li style={{ color: "red", marginTop: "10px" }}>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
