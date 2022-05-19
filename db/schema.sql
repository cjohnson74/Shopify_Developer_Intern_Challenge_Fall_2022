-- DROP DATABASE
DROP DATABASE IF EXISTS shopify_db;

-- CREATE DATABASE
CREATE DATABASE shopify_db;

-- USE shopify_db;

-- DROP TABLE IF EXISTS warehouse;
-- CREATE TABLE warehouse (
--      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--      warehouse_name VARCHAR(30) NOT NULL
-- );

-- DROP TABLE IF EXISTS inventoryItems;
-- CREATE TABLE inventoryItems (
--      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--      inventoryItem_name VARCHAR(30) NOT NULL,
--      price DECIMAL NOT NULL,
--      stock INT NOT NULL,
--      warehouse_id INT,
--      FOREIGN KEY (warehouse_id)
--      REFERENCES Warehouse(id)
-- );