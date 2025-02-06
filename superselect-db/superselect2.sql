-- Criação do banco de dados
CREATE DATABASE superselect;

-- Seleção do banco de dados
USE superselect;

-- Tabela de Usuários
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Tabela de Produtos
CREATE TABLE  products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255), -- URL da imagem do produto
    category VARCHAR(100) NOT NULL,
    expiration_date DATE, -- Data de validade
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Comentários (Relacionados aos Produtos)
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Hora do comentário
    comment_text TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- -- INSERIR NO QUERY
-- ALTER USER 'root'@'localhost' IDENTIFIED BY 'admin';
