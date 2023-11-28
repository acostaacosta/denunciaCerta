## BD - 

![7](https://github.com/wallyson123/denunciaCerta/assets/26144781/a00d7349-e200-4d74-8c4b-b36e6837f2c3)
![9](https://github.com/wallyson123/denunciaCerta/assets/26144781/ccb7697f-c157-4fee-b5c3-38190a63b75f)
![8](https://github.com/wallyson123/denunciaCerta/assets/26144781/5585f337-b5c1-4928-abcb-6bc8ca78a42d)


## Seeds -

-- Inserindo dados na tabela STATUS
INSERT INTO STATUS (acompanhamento)
VALUES ('registrada');
INSERT INTO STATUS (acompanhamento)
VALUES ('em analise');
INSERT INTO STATUS (acompanhamento)
VALUES ('resolvendo');
INSERT INTO STATUS (acompanhamento)
VALUES ('resolvida');


-- Inserindo dados na tabela CLASSIFICACAO
INSERT INTO CLASSIFICACAO (nivel)
VALUES ('baixo');
INSERT INTO CLASSIFICACAO (nivel)
VALUES ('medio');
INSERT INTO CLASSIFICACAO (nivel)
VALUES ('alto');


-- Inserindo dados na tabela USUARIO
INSERT INTO USUARIO (permissao, senha, nome, email, data_nasc, sexo, telefone)
VALUES
  ('adm', 'senha1', 'João Silva', 'joao.silva@example.com', '1990-01-01', 'M', '1234567890'),
  ('adm', 'senha2', 'Maria Santos', 'maria.santos@example.com', '1991-02-02', 'F', '0987654321'),
  ('user', 'senha3', 'Pedro Oliveira', 'pedro.oliveira@example.com', '1992-03-03', 'M', '9876543210'),
  ('user', 'senha4', 'Ana Costa', 'ana.costa@example.com', '1993-04-04', 'F', '0123456789'),
  ('user', 'senha5', 'Luiz Pereira', 'luiz.pereira@example.com', '1994-05-05', 'M', '1029384756'),
  ('user', 'senha6', 'Mariana Rodrigues', 'mariana.rodrigues@example.com', '1995-06-06', 'F', '5647382910'),
  ('user', 'senha7', 'Rafael Souza', 'rafael.souza@example.com', '1996-07-07', 'M', '1928374650'),
  ('user', 'senha8', 'Carolina Almeida', 'carolina.almeida@example.com', '1997-08-08', 'F', '6574839201'),
  ('user', 'senha9', 'Gustavo Lima', 'gustavo.lima@example.com', '1998-09-09', 'M', '2938475601'),
  ('user', 'senha10', 'Amanda Castro', 'amanda.castro@example.com', '1999-10-10', 'F', '1092837465');


-- Inserindo dados na tabela ENDERECO
INSERT INTO ENDERECO (cep, cidade, bairro, rua, numero)
VALUES
  ('55000-000', 'Caruaru', 'Maurício de Nassau', 'Rua A', '123'),
  ('55000-001', 'Caruaru', 'Boa Vista', 'Rua B', '456'),
  ('55000-002', 'Caruaru', 'São Francisco', 'Rua C', '789'),
  ('55000-003', 'Caruaru', 'Maurício de Nassau', 'Rua D', '321'),
  ('55000-004', 'Caruaru', 'Boa Vista', 'Rua E', '654'),
  ('55000-005', 'Caruaru', 'São Francisco', 'Rua F', '987'),
  ('55000-006', 'Caruaru', 'Maurício de Nassau', 'Rua G', '741'),
  ('55000-007', 'Caruaru', 'Boa Vista', 'Rua H', '852'),
  ('55000-008', 'Caruaru', 'São Francisco', 'Rua I', '369'),
  ('55000-009', 'Caruaru', 'Maurício de Nassau', 'Rua J', '159'),
  ('55000-000', 'Caruaru', 'Centro', 'Rua São Francisco', '13'),
  ('55010-000', 'Caruaru', 'Maurício de Nassau', 'Avenida Agamenon Magalhães', '456'),
  ('55020-000', 'Caruaru', 'Universitário', 'Rua Júlio de Melo', '789'),
  ('55030-000', 'Caruaru', 'Boa Vista', 'Avenida Rui Barbosa', '97'),
  ('55040-000', 'Caruaru', 'Indianópolis', 'Rua Padre Cícero', '654'),
  ('55050-000', 'Caruaru', 'Salgado', 'Avenida Leão Dourado', '3'),
  ('55060-000', 'Caruaru', 'Caiucá', 'Rua Professor José Leão', '753'),
  ('55070-000', 'Caruaru', 'Divinópolis', 'Avenida Caruaru', '159'),
  ('55080-000', 'Caruaru', 'Santa Rosa', 'Rua Armando da Fonte', '57'),
  ('55090-000', 'Caruaru', 'Maria Auxiliadora', 'Avenida Adjar da Silva Casé', '852');


-----------------------------------------------------------------------------------------------------
-- Inserindo dados na tabela DENUNCIA
INSERT INTO DENUNCIA (id_status, id_endereco, id_usuario, id_classificacao, descricao)
VALUES
  (1, 1, 1, 1, 'Descrição da denúncia 1'),
  (2, 2, 2, 2, 'Descrição da denúncia 2'),
  (1, 3, 3, 3, 'Descrição da denúncia 3'),
  (2, 4, 4, 1, 'Descrição da denúncia 4'),
  (1, 5, 5, 2, 'Descrição da denúncia 5'),
  (2, 6, 6, 3, 'Descrição da denúncia 6'),
  (1, 7, 7, 1, 'Descrição da denúncia 7'),
  (2, 8, 8, 2, 'Descrição da denúncia 8'),
  (1, 9, 9, 3, 'Descrição da denúncia 9'),
  (2, 10, 10, 1, 'Descrição da denúncia 10');



----------------------------------------------------------------------------------------------------
-- Inserindo dados na tabela COMENTARIOS
INSERT INTO COMENTARIOS (id_denuncia, id_usuario, comentario)
VALUES
  (1, 1, 'Comentário 1'),
  (2, 2, 'Comentário 2'),
  (3, 3, 'Comentário 3'),
  (4, 4, 'Comentário 4'),
  (5, 5, 'Comentário 5'),
  (6, 6, 'Comentário 6'),
  (7, 7, 'Comentário 7'),
  (8, 8, 'Comentário 8'),
  (9, 9, 'Comentário 9'),
  (10, 10, 'Comentário 10'),
  (1, 2, 'Comentário 11'),
  (2, 3, 'Comentário 12'),
  (3, 4, 'Comentário 13'),
  (4, 5, 'Comentário 14'),
  (5, 6, 'Comentário 15'),
  (6, 7, 'Comentário 16'),
  (7, 8, 'Comentário 17'),
  (8, 9, 'Comentário 18'),
  (9, 10, 'Comentário 19'),
  (10, 1, 'Comentário 20'),
  (1, 1, 'A situação relatada é preocupante. As autoridades competentes precisam agir com urgência.'),
  (2, 2, 'Parabéns pela iniciativa de denunciar. Juntos podemos combater essa problemática.'),
  (3, 3, 'Estou perplexo com o descaso das autoridades em relação a essa questão.'),
  (4, 4, 'É triste ver esse tipo de situação acontecendo. Espero que seja resolvido o mais rápido possível.'),
  (5, 5, 'Fico indignado ao ver que problemas assim persistem. Vamos fazer nossa parte para mudar.'),
  (6, 6, 'Comentário interessante. É importante refletir sobre as causas desse problema.'),
  (7, 7, 'Precisamos unir forças para resolver essa situação. Contem comigo.'),
  (8, 8, 'Essa denúncia merece atenção especial. Vamos acompanhar de perto o desenrolar dos fatos.'),
  (9, 9, 'Parabéns pela coragem de denunciar. Espero que isso traga os resultados esperados.'),
  (10, 10, 'Comentário construtivo. É importante destacar possíveis soluções.'),
  (1, 2, 'Obrigado por compartilhar essa informação. Vamos espalhar a conscientização.'),
  (2, 3, 'É lamentável que essa situação ainda ocorra. Vamos trabalhar para mudar esse cenário.'),
  (3, 4, 'Precisamos de uma ação efetiva para resolver essa questão. Não podemos mais ignorar.'),
  (4, 5, 'Estou solidário com essa denúncia. Vamos pressionar por uma solução rápida.'),
  (5, 6, 'Fiquei estarrecido ao ler esse relato. É urgente tomar medidas para evitar que se repita.'),
  (6, 7, 'Esse problema afeta a todos nós. Vamos unir forças e cobrar por providências.'),
  (7, 8, 'É importante envolver a comunidade nessa discussão. A união faz a diferença.'),
  (8, 9, 'Parabéns por não se calar diante dessa situação. Contem com meu apoio.'),
  (9, 10, 'Comentário pertinente. É necessário debatermos sobre possíveis soluções.'),
  (10, 1, 'Agradeço por compartilhar essa denúncia. Vamos buscar uma resposta para esse problema.');


## DDL -

-- Criação do banco de dados
CREATE DATABASE denunciacerta;

-- Criação da tabela USUARIO
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

-- Adição de coluna e constraint
ALTER TABLE Usuario
ADD COLUMN fk_user_id INT,
ADD CONSTRAINT FK_Usuario_Administrador FOREIGN KEY (fk_user_id)
REFERENCES Usuario (id);

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

-- Criação da tabela DENUNCIA
CREATE TABLE DENUNCIA (
  id SERIAL PRIMARY KEY,
  id_status INT NOT NULL,
  id_endereco INT NOT NULL,
  id_usuario INT NOT NULL,
  id_classificacao INT NOT NULL,
  descricao TEXT NOT NULL,
  valido BOOLEAN DEFAULT FALSE,
  data_deuncia TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_den_status FOREIGN KEY (id_status) REFERENCES STATUS (id),
  CONSTRAINT fk_den_endereco FOREIGN KEY (id_endereco) REFERENCES ENDERECO (id),
  CONSTRAINT fk_den_usuario FOREIGN KEY (id_usuario) REFERENCES USUARIO (id),
  CONSTRAINT fk_den_classificacao FOREIGN KEY (id_classificacao) REFERENCES CLASSIFICACAO (id)
);

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
