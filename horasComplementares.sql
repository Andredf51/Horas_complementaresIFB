--Criando o Banco de dados Horas Complementares
CREATE DATABASE horasComplementares;
--Criando a tabela cursos
CREATE TABLE cursos(
    id_cursos int primary key,
    nome_curso varchar(100),
    carga_hor_max int
);
-- Criando a tabela Usuarios
CREATE TABLE usuarios(
    id_usuario int primary key,
    matricula varchar(20),
    nome varchar(50),
    --curso varchar()
    semestre varchar(12),
    horas_acum int,
    tipo varchar(100),
    CPF varchar(15),
    login_user varchar(50),
    senha_user varchar(50),
    id_cursos_user int references cursos(id_cursos)
);
--Criando a tabela atividades
CREATE TABLE atividades(
    id_atividade int primary key,
    nome_ativ varchar(100),
    id_cursos_at int references cursos(id_cursos)
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