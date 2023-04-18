CREATE DATABASE crudnodejsmysql;

USE crudnodejsmysql;

CREATE TABLE customer (
id INT(6) UNSIGNED AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
correo VARCHAR(100) UNIQUE NOT NULL,
contrasena VARCHAR(100) NOT NULL,
fecha_nacimiento DATE NOT NULL,
genero CHAR(1) NOT NULL,
CONSTRAINT PK_customer PRIMARY KEY (id)
);

INSERT INTO customer (nombre, apellido, correo, contrasena, fecha_nacimiento, genero) VALUES
('Juan', 'Perez', 'juan.perez@gmail.com', 'password', '1990-05-15', 'M'),
('Maria', 'Gonzalez', 'maria.gonzalez@hotmail.com', 'password', '1995-11-30', 'F'),
('Pedro', 'Rodriguez', 'pedro.rodriguez@yahoo.com', 'password', '1985-03-20', 'M');

drop table rutina;

CREATE TABLE Rutina (
  id INT(6) UNSIGNED AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(500) NULL,
  nivel VARCHAR(50) NOT NULL,
  CONSTRAINT PK_rutina PRIMARY KEY (id)
);

INSERT INTO Rutina (nombre, descripcion, nivel) VALUES
('Rutina de fuerza', 'Rutina para desarrollar fuerza y tono muscular', 'Intermedio'),
('Rutina de cardio', 'Rutina para mejorar la resistencia cardiovascular', 'Principiante'),
('Rutina de cuerpo completo', 'Rutina para trabajar todos los grupos musculares', 'Avanzado');

select * from rutina;

drop table ejercicio;

CREATE TABLE Ejercicio (
  id INT(6) UNSIGNED AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(500) NULL,
  imagen_url VARCHAR(200) NULL,
  video_url VARCHAR(200) NULL,
  dificultad VARCHAR(50) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  musculos_trabajados VARCHAR(100) NOT NULL,
  calorias_quemadas DECIMAL(5,2) NOT NULL,
  CONSTRAINT PK_ejercicio PRIMARY KEY (id)
);

INSERT INTO Ejercicio (nombre, descripcion, imagen_url, video_url, dificultad, tipo, musculos_trabajados, calorias_quemadas) 
VALUES
('Sentadillas', 'Ejercicio para trabajar los músculos de las piernas y glúteos', 'https://ejemplo.com/imagen1.jpg', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'INTERMEDIO', 'Pesas', 'Piernas, Glúteos', 150.5),
('Press de banca', 'Ejercicio para trabajar los músculos del pecho y tríceps', 'https://ejemplo.com/imagen2.jpg', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'AVANZADO', 'Máquinas', 'Pecho, Tríceps', 200.75),
('Remo con barra', 'Ejercicio para trabajar los músculos de la espalda y bíceps', 'https://ejemplo.com/imagen3.jpg', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'AVANZADO', 'Pesas', 'Espalda, Bíceps', 180.25);
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE RutinaEjercicio (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  rutina_id INT(6) unsigned,
  ejercicio_id INT(6) unsigned,
  series INT NOT NULL,
  repeticiones INT NOT NULL,
  descanso_segundos INT NOT NULL,
  CONSTRAINT FK_RutinaEjercicios_Rutinas FOREIGN KEY (rutina_id) REFERENCES Rutina (id),
  CONSTRAINT FK_RutinaEjercicios_Ejercicios FOREIGN KEY (ejercicio_id) REFERENCES Ejercicio (id)
);

INSERT INTO RutinaEjercicio (rutina_id, ejercicio_id, series, repeticiones, descanso_segundos) 
VALUES
(1, 2, 3, 10, 60),
(1, 3, 4, 12, 45),
(2, 1, 5, 8, 90),
(2, 3, 3, 10, 60),
(3, 2, 4, 12, 45);

-------------------------------------------------------------------------------------------------------------------------

CREATE TABLE RegistroEjercicios (
  id INT(6) UNSIGNED AUTO_INCREMENT,
  usuario_id  INT(6) unsigned,
  ejercicio_id  INT(6) unsigned,
  fecha DATETIME NOT NULL,
  series INT NOT NULL,
  repeticiones INT NOT NULL,
  peso DECIMAL(5,2) NULL,
  duracion_segundos INT NULL,
  CONSTRAINT PK_RegistroEjercicios PRIMARY KEY (id),
  CONSTRAINT FK_RegistroEjercicios_Usuarios FOREIGN KEY (usuario_id) REFERENCES customer (id),
  CONSTRAINT FK_RegistroEjercicios_Ejercicios FOREIGN KEY (ejercicio_id) REFERENCES Ejercicio (id)
);

INSERT INTO RegistroEjercicios (usuario_id, ejercicio_id, fecha, series, repeticiones, peso, duracion_segundos)
VALUES
(1, 3, '2022-03-01 10:30:00', 3, 10, 15, 90),
(1, 1, '2022-03-03 14:45:00', 4, 12, 20, 120),
(1, 2, '2022-03-05 08:00:00', 5, 8, 25, 150),
(2, 3, '2022-03-01 11:15:00', 3, 10, 30, 90),
(2, 2, '2022-03-03 15:30:00', 4, 12, 35, 120),
(2, 3, '2022-03-05 09:30:00', 5, 8, 40, 150);

------------------------------------------------------------------------------------------------------------------------
CREATE TABLE ComposicionCorporal (
  id INT(6) UNSIGNED AUTO_INCREMENT,
  usuario_id INT(6) unsigned,
  fecha DATETIME NOT NULL,
  peso DECIMAL(5,2) NOT NULL,
  altura DECIMAL(5,2) NOT NULL,
  masa_muscular DECIMAL(5,2) NULL,
  grasa_corporal DECIMAL(5,2) NULL,
  masa_osea DECIMAL(5,2) NULL,
  CONSTRAINT PK_ComposicionCorporal PRIMARY KEY (id),
  CONSTRAINT FK_ComposicionCorporal_Usuarios FOREIGN KEY (usuario_id) REFERENCES customer (id)
);

INSERT INTO ComposicionCorporal (usuario_id, fecha, peso, altura, masa_muscular, grasa_corporal, masa_osea) VALUES
(1, '2022-01-01 08:00:00', 80.5, 1.75, 43.2, 15.3, 3.2),
(1, '2022-02-01 08:00:00', 79.8, 1.75, 44.5, 14.7, 3.1),
(1, '2022-03-01 08:00:00', 78.9, 1.75, 44.9, 14.1, 3.0),
(2, '2022-01-01 10:00:00', 65.2, 1.65, 38.2, 22.5, 2.8),
(2, '2022-02-01 10:00:00', 64.7, 1.65, 39.1, 21.7, 2.9),
(2, '2022-03-01 10:00:00', 63.9, 1.65, 39.8, 20.9, 2.8);


SHOW TABLES;

DESCRIBE customer;


------------------------------------------
SELECT user,authentication_string,plugin,host FROM mysql.user;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
ALTER USER 'root'@'localhost' IDENTIFIED BY 'contraseña';

select * from customer;
