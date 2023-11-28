
-- Criação do banco de dados
CREATE DATABASE denunciacerta;

-- Criação da tabela USUARIO
================Atualização Para BD==============
ALTER TABLE usuario
ALTER COLUMN permissao SET DEFAULT 'padrao';

ALTER TABLE usuario
ADD COLUMN foto text;

=================================================
CREATE TABLE USUARIO (
  id SERIAL PRIMARY KEY,
  permissao VARCHAR(10) NOT NULL,
  senha VARCHAR(10) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  data_nasc DATE,
  sexo CHAR(1) NOT NULL,
  telefone VARCHAR(20) NOT NULL
);

-- Criação da tabela ENDERECO
CREATE TABLE ENDERECO (
  id SERIAL PRIMARY KEY,
  cep VARCHAR(10) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  rua VARCHAR(100) NOT NULL,
  numero VARCHAR(10) NOT NULL
);

-- Criação da tabela STATUS
CREATE TABLE STATUS (
  id SERIAL PRIMARY KEY,
  acompanhamento VARCHAR(20)
);

-- Criação da tabela CLASSIFICACAO
CREATE TABLE CLASSIFICACAO (
  id SERIAL PRIMARY KEY,
  nivel VARCHAR(10)
);

==========Alteração para BD ============
ALTER TABLE denuncia
ADD COLUMN cep VARCHAR(10);

ALTER TABLE denuncia 
ADD COLUMN foto text;
==========Alteração para BD ============

==========Possível alteração vale testar============
  CONSTRAINT fk_denuncia_status FOREIGN KEY (id_status) REFERENCES STATUS (id),
  CONSTRAINT fk_denuncia_endereco FOREIGN KEY (id_endereco) REFERENCES ENDERECO (id),
  CONSTRAINT fk_denuncia_usuario FOREIGN KEY (id_usuario) REFERENCES USUARIO (id),
  CONSTRAINT fk_denuncia_classificacao FOREIGN KEY (id_classificacao) REFERENCES CLASSIFICACAO (id)
==========Possível alteração vale testar============



-- Criação da tabela DENUNCIA
CREATE TABLE DENUNCIA (
  id SERIAL PRIMARY KEY,
  id_status INT NOT NULL,
  id_endereco INT NOT NULL,
  endereco TEXT NOT NULL,
  foto TEXT NOT NULL,
  cep VARCHAR(10),
  id_classificacao INT NOT NULL,
  descricao TEXT NOT NULL,
  valido BOOLEAN DEFAULT FALSE,
  data_deuncia TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_den_status FOREIGN KEY (id_status) REFERENCES STATUS (id),
  CONSTRAINT fk_den_endereco FOREIGN KEY (id_endereco) REFERENCES ENDERECO (id),
  CONSTRAINT fk_den_usuario FOREIGN KEY (id_usuario) REFERENCES USUARIO (id),
  CONSTRAINT fk_den_classificacao FOREIGN KEY (id_classificacao) REFERENCES CLASSIFICACAO (id)
);
-- =======removido temporariamente
id_usuario INT NOT NULL,

ALTER TABLE denuncia
ADD COLUMN likes INT DEFAULT 0;

-- colocou-se endereco sem o id_
-- =======removido temporariamente

-- Criação da tabela COMENTARIOS
CREATE TABLE COMENTARIOS (
  id SERIAL PRIMARY KEY,
  id_denuncia INT NOT NULL,
  id_usuario INT NOT NULL,
  comentario TEXT NOT NULL,
  valido BOOLEAN DEFAULT FALSE,
  data_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_coment_denuncia FOREIGN KEY (id_denuncia) REFERENCES DENUNCIA (id),
  CONSTRAINT fk_coment_usuario FOREIGN KEY (id_usuario) REFERENCES USUARIO (id)
);

