// backend/server.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// adjust credentials if needed
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // set your MySQL password
  database: "ecommerce"
});

db.connect(err => {
  if (err) console.error("DB connection error:", err);
  else console.log("Connected to MySQL");
});

// --- PRODUCTS CRUD ---
app.get("/products", (req, res) => {
  // optional query ?featured=1 or ?category=Phones
  const { featured, category } = req.query;
  let sql = "SELECT * FROM products";
  const params = [];
  if (featured) { sql += " WHERE featured = ?"; params.push(1); }
  if (category) {
    if (params.length) sql += " AND category = ?"; else sql += " WHERE category = ?"; 
    params.push(category);
  }
  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.get("/products/:id", (req, res) => {
  db.query("SELECT * FROM products WHERE id = ?", [req.params.id], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows[0] || null);
  });
});

app.post("/products", (req, res) => {
  const { name, description, price, image_url, category, featured } = req.body;
  db.query(
    "INSERT INTO products (name, description, price, image_url, category, featured) VALUES (?, ?, ?, ?, ?, ?)",
    [name, description, price, image_url, category || "General", featured ? 1 : 0],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product created", id: result.insertId });
    }
  );
});

app.put("/products/:id", (req, res) => {
  const { name, description, price, image_url, category, featured } = req.body;
  db.query(
    "UPDATE products SET name=?, description=?, price=?, image_url=?, category=?, featured=? WHERE id=?",
    [name, description, price, image_url, category || "General", featured ? 1 : 0, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product updated" });
    }
  );
});

app.delete("/products/:id", (req, res) => {
  db.query("DELETE FROM products WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product deleted" });
  });
});

// Optional: simple "purchase" endpoint that just records a mock order (not required)
app.post("/purchase", (req, res) => {
  const { productId, quantity, buyerName } = req.body;
  // For demo we just respond with confirmation; you can extend to save orders
  res.json({ success: true, message: `Order confirmed for product ${productId} x${quantity} (mock).`, buyer: buyerName || "Guest" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
