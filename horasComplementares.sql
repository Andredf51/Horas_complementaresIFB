--Criando o Banco de dados Horas Complementares
CREATE DATABASE horasComplementares;
-- Criando a tabela cursos
CREATE TABLE cursos(
	id_cursos int primary key,
	nome_curso varchar(100),
	carga_hor_max int
);

-- Criando a tabela Usuários
CREATE TABLE usuarios(
	id_usuario int primary key,
	login varchar(50),
	senha varchar(50),
	id_cursos int references cursos(id_cursos)
);

-- Criando a tabela Aluno
CREATE TABLE aluno(
	matricula varchar(100) primary key,
	nome varchar(50),
	curso varchar(100),
	semestre int,
	horas_acum int,
	id_usuario_aluno int references usuarios(id_usuario)
);

-- Criando a tabela Professor 
CREATE TABLE professor(
	matricula varchar(100) primary key,
	curso varchar(100),
	nome varchar(50),
	id_usuario_professor int references usuarios(id_usuario)
);

-- Criando a tabela Coordenador
CREATE TABLE coordenador(
	matricula varchar(100) primary key,
	curso varchar(100),
	nome varchar(50),
	id_usuario_coordenador int references usuarios(id_usuario)
);

-- Criando a tabela Administrador 
CREATE TABLE administrador(
	CPF varchar(12) primary key,
	nome varchar(50),
	id_usuario_adm int references usuarios(id_usuario)
);

--Criando a tabela Atividades 
CREATE TABLE atividades(
	id_atividade int primary key,
	nome_ativ varchar(200),
	id_curso_at int references cursos(id_cursos)
);
-- Inserindo valores na tabela cursos
insert into cursos values 
	(1,'Tecnologia em Sistemas Para Internet',100),
	(2,'Tecnologia em Processos Gerenciais',100),
	(3,'Tecnologia em Gestão Pública',100),
	(4,'Tecnologia em Eventos',100),
	(5,'Licenciatura em Dança',300),
	(6,'Licenciatura em Letras - Língua Espanhola',300),
	(7,'Licenciatura em Matemática',300),
	(8,'Bacharel em Administração',300),
	(9,'Licenciatura em Química',300),
	(10,'Tecnologia em Alimentos',100),
	(11,'Tecnologia em Logística',100),
	(12,'Licenciatura em Biologia',300),
	(13,'Tecnologia em Agroecologia',100),
	(14,'Tecnologia em Gastronomia',100),
	(15,'Licenciatura em Geografia',300),
	(16,'Licenciatura em Letras - Lingua Ingles',300),
	(17,'Licenciatura em Letras - Lingua Português',300),
	(18,'Licenciatura em Pedagogia',300),
	(19,'Tecnologia em Secretariado',100),
	(20,'Bacharel em Ciências da Computação',300),
	(21,'Licenciatura em Ciências da Computação',300),
	(22,'Tecnologia em Automação Industrial',100),
	(23,'Tecnologia em Design de Moda',100),
	(24,'Licenciatura em Física',300),
	(25,'Banco de dados 2',1324);--Excluir
	
-- Inserindo Valores na Tabela Atividades 
INSERT INTO atividades VALUES 
	(1,'Monitoria',1),
    (2,'Monitoria',2),
    (3,'Monitoria',3),
    (4,'Monitoria',4),
    (5,'Monitoria',5),
    (6,'Monitoria',6),
	(7,'Monitoria',7),
    (8,'Monitoria',8),
    (9,'Monitoria',9),
    (10,'Monitoria',10),
    (11,'Monitoria',11),
    (12,'Monitoria',12),
    (13,'Monitoria',13),
    (14,'Monitoria',14),
    (15,'Monitoria',15),
    (16,'Monitoria',16),
    (17,'Monitoria',17),
    (18,'Monitoria',18),
    (19,'Monitoria',19),
    (20,'Monitoria',20),
    (21,'Monitoria',21),
    (22,'Monitoria',22),
    (23,'Monitoria',23),
    (24,'Monitoria',24),
    (25,'Congresso',1),
    (26,'Congresso',2),
    (27,'Congresso',3),
    (28,'Congresso',4),
    (29,'Congresso',5),
    (30,'Congresso',6),
    (31,'Congresso',7),
    (32,'Congresso',8),
    (33,'Congresso',9),
    (34,'Congresso',10),
    (35,'Congresso',11),
    (36,'Congresso',12),
    (37,'Congresso',13),
    (38,'Congresso',14),
    (39,'Congresso',15),
    (40,'Seminário',16),
    (41,'Seminário',17),
    (42,'Seminário',18),
    (43,'Seminário',19),
    (44,'Seminário',20),
    (45,'Seminário',21),
    (46,'Seminário',22),
    (47,'Seminário',23),
    (48,'Seminário',24),
    (49,'Seminário',1),
    (50,'Seminário',2),
    (51,'Seminário',3),
    (52,'Seminário',4),
    (53,'Seminário',5),
    (54,'Seminário',6),
    (55,'Seminário',7),
    (56,'Seminário',8),
    (57,'Seminário',9),
    (58,'Seminário',10),
    (59,'Seminário',11),
    (60,'Seminário',12),
    (61,'Seminário',13),
    (62,'Seminário',14),
    (63,'Seminário',15),
    (64,'Seminário',16),
    (65,'Seminário',17),
    (66,'Seminário',18),
    (67,'Seminário',19),
    (68,'Seminário',20),
    (69,'Seminário',21),
    (70,'Semanas Acadêmicas',10),
    (71,'Semanas Acadêmicas',11),
    (72,'Semanas Acadêmicas',12),
    (73,'Semanas Acadêmicas',13),
    (74,'Semanas Acadêmicas',14),
    (75,'Semanas Acadêmicas',15),
    (76,'Semanas Acadêmicas',16),
    (77,'Semanas Acadêmicas',17),
    (78,'Semanas Acadêmicas',18),
    (79,'Semanas Acadêmicas',19),
    (80,'Semanas Acadêmicas',20),
    (81,'Semanas Acadêmicas',21),
    (82,'Semanas Acadêmicas',22),
    (83,'Semanas Acadêmicas',23),
    (84,'Semanas Acadêmicas',24),
    (85,'Semanas Acadêmicas',1),
    (86,'Semanas Acadêmicas',2),
    (87,'Semanas Acadêmicas',3),
    (88,'Semanas Acadêmicas',4),
    (89,'Semanas Acadêmicas',5),
    (90,'Semanas Acadêmicas',6),
    (91,'Semanas Acadêmicas',7),
    (92,'Semanas Acadêmicas',8),
    (93,'Semanas Acadêmicas',9),
    (94,'Semanas Acadêmicas',10),
    (95,'Semanas Acadêmicas',21),
    (96,'Semanas Acadêmicas',22),
    (97,'Semanas Acadêmicas',23),
    (98,'Semanas Acadêmicas',24);

-- Inserindo Valores na tabela Usuários
INSERT INTO usuarios values 
	(1,'Abelardo','1234',24),
    (2,'Abraão','2341',23),
    (3,'Abigail','1134',22),
    (4,'Abel','4234',21),
    (5,'Abner','1434',20),
    (6,'Assis','1345',19),
    (7,'Afonso','1414',18),
    (8,'Abila','1334',17),
    (9,'Alessandra','1534',16),
    (10,'Agner','2041',15),
    (11,'Alonso','1934',14),
    (12,'Abela','4254',13),
    (13,'André','3434',12),
    (14,'Alexandre','1545',11),
    (15,'Alexa','1541',10),
    (16,'Alex','1344',9),
    (17,'Abelardo','5234',24),
    (18,'April','5341',23),
    (19,'Apu','6134',22),
    (20,'Antonia','4634',21),
    (21,'Antonia','1634',10),
    (22,'Ana','1341',9),
    (23,'Afelia','1664',8),
    (24,'Anna','1224',7),
    (25,'Alessandro','4534',6),
    (26,'Agnaldo','2051',5),
    (27,'Bruna','1594',4),
    (28,'Beatriz','5254',3),
    (29,'Bianca','3424',2),
    (30,'Betina','1145',11),
    (31,'Astronauta','5541',1),
    (32,'Bernado','1344',9),
    (33,'Caroline','1654',22),
    (34,'Luan','1589',21),
    (35,'Brena','2434',20),
    (36,'Breno','5445',19),
    (37,'Vanessa','2414',18),
    (38,'Daniel','4534',17),
    (39,'Enéias','3534',16),
    (40,'Leonardo','2241',15),
    (41,'Luiz','4914',14),
    (42,'Micaela','5554',13),
    (43,'Maicon','3444',12),
    (44,'Felicia','1252',11),
    (45,'Fabiana','1111',10),
    (46,'Fernando','3544',9),
    (47,'Douglas','5934',24),
    (48,'Wendell','5021',23),
    (49,'Elizeu','1154',22),
    (50,'Matheus','4664',21),
    (51,'Caio','5234',10),
    (52,'Rodrigo','1539',9),
    (53,'Mônica','4664',8),
    (54,'Anny','2222',5),
    (55,'Sandro','2534',6),
    (56,'Agostinho','2351',5),
    (57,'Marcos','6594',4),
    (58,'Pedro','5654',3),
    (59,'Emanuelle','3624',1),
    (60,'Fernanda','6156',11),
    (61,'Rafaela','7541',1),
    (62,'Suelen','4344',9);

/*CREATE VIEW vwCurso_At as SELECT nome_curso, carga_hor_max, nome_ativ FROM cursos inner join atividades on cursos.id_cursos = atividades.id_curso_at
DROP VIEW vwCurso_at
SELECT * FROM vwCurso_At; */