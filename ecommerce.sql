CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150),
  description TEXT,
  price DECIMAL(10,2),
  image_url VARCHAR(255),
  category VARCHAR(100),
  featured TINYINT DEFAULT 0
);

INSERT INTO products (name, description, price, image_url, category, featured) VALUES
('Boat Rockerz 510 Wireless Headphones', 'Wireless BT headphones with mic', 120.36, 'https://via.placeholder.com/300x300?text=Headphones', 'Audio', 1),
('MacBook Pro 13', 'Apple MacBook Pro 13-inch', 1299.00, 'https://via.placeholder.com/300x300?text=MacBook', 'Laptops', 1),
('Galaxy Book3 Laptop', 'Lightweight laptop with good battery', 199.00, 'https://via.placeholder.com/300x300?text=GalaxyBook', 'Laptops', 0),
('Wireless Earbuds', 'True wireless with charging case', 59.00, 'https://via.placeholder.com/300x300?text=Earbuds', 'Audio', 0),
('Smart Watch', 'Fitness + notifications', 49.00, 'https://via.placeholder.com/300x300?text=SmartWatch', 'Wearables', 0);
