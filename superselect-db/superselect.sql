USE superselect;

CREATE TABLE produtos (
	id_produto INT AUTO_INCREMENT PRIMARY KEY,
	nome_produto VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    data_validade DATE,
    id_categoria INT,
    
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);
INSERT INTO produtos (nome_produto, preco, data_validade, id_categoria)
VALUES 
	('Arroz', 25.50, '2025-12-31', 1),
    ('Coca-Cola', 5.00, '2030-06-30', 2),
    ('Detergente', 3.20, '2025-05-15', 3);

CREATE TABLE categorias (
	id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL
);
INSERT INTO categorias (nome_categoria)
VALUES 
	('Alimentos'),
    ('Bebidas'),
    ('Limpeza');

CREATE TABLE promocoes (
	id_promocao INT AUTO_INCREMENT PRIMARY KEY,
    nome_promocao VARCHAR(255) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    desconto_percentual decimal(5, 2), -- para desconto percentual 
    desconto_valor DECIMAL(10, 2), -- para desconto em valor fixo 
    tipo_desconto ENUM('percentual', 'valor') NOT NULL, -- define se o desconto é em percentual ou valor fixo
    ativo BOOLEAN DEFAULT TRUE -- define se o desconto está ativo ou não
);
INSERT INTO promocoes (nome_promocao, data_inicio, data_fim, desconto_percentual, desconto_valor, tipo_desconto, ativo)
VALUES
	('Promoção Arroz', '2025-01-01', '2025-01-31', 10.00, NULL, 'percentual', TRUE),
	('Promoção Bebidas', '2025-01-10', '2025-01-20', NULL, 2.00, 'valor', TRUE);

CREATE TABLE produtos_promocao (
	id_produto INT NOT NULL,
    id_promocao INT NOT NULL, 
    PRIMARY KEY (id_produto, id_promocao),
	FOREIGN KEY (id_produto) REFERENCES produtos(id_produto),
    FOREIGN KEY (id_promocao) REFERENCES promocoes(id_promocao)
);
INSERT INTO produtos_promocao (id_produto, id_promocao)
VALUES 
	(1, 1),
    (2, 2);

CREATE TABLE estoque (
    id_produto INT NOT NULL,
    quantidade_atual INT NOT NULL,
    data_entrada DATE NOT NULL,
    quantidade_minima INT NOT NULL,
    PRIMARY KEY (id_produto),
    
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);
ALTER TABLE estoque DROP COLUMN quantidade_minima;

CREATE TABLE clientes (
	id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(50), 
    endereco_entrega TEXT,
    historico_compras TEXT
);
INSERT INTO clientes (nome_cliente, email, telefone, endereco_entrega, historico_compras)
VALUES
	('João Silva', 'joao@email.com', '123456789', 'Rua A, 123', 'Arroz, Coca-Cola'),
	('Maria Oliveira', 'maria@email.com', '987654321', 'Rua B, 456', 'Detergente');

CREATE TABLE vendas (
	id_venda INT AUTO_INCREMENT PRIMARY KEY,
	data_venda DATETIME NOT NULL,
    produtos_vendidos TEXT,
    valor_total DECIMAL(10, 2) NOT NULL,
	metodo_pagamento ENUM('pix', 'dinheiro', 'débito', 'crédito'),
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);
ALTER TABLE vendas DROP COLUMN produtos_vendidos;
INSERT INTO vendas (data_venda, valor_total, metodo_pagamento, id_cliente)
VALUES 
	('2025-01-23 14:40:30', 100.00, 'pix', 1),
    ('2025-01-23 15:00:00', 15.00, 'dinheiro', 2);

CREATE TABLE venda_produtos (
	id_venda INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    PRIMARY KEY (id_venda, id_produto),
    FOREIGN KEY (id_venda) REFERENCES vendas(id_venda),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);
INSERT INTO venda_produtos (id_venda, id_produto, quantidade)
VALUES 
	(2, 1, 2),
	(2, 2, 3);
    
SELECT id_venda, data_venda, valor_total, metodo_pagamento, id_cliente FROM vendas;
SELECT * FROM venda_produtos WHERE id_venda = 2;


ALTER USER 'root'@'localhost' IDENTIFIED BY 'admin';