create database dbFormularios;
use dbFormularios;
CREATE TABLE registro 
(
  id INT AUTO_INCREMENT,
  Nombres VARCHAR(50),
  Apellidos VARCHAR(50),
  Telefono VARCHAR(9),
  Correo VARCHAR(60),
  Mensaje VARCHAR(100),
  PRIMARY KEY (id)
);
SHOW COLUMNS IN registro;

insert into registro
(Nombres, Apellidos,  Telefono, Correo, Mensaje)
value
('sofia', 'lopez zambrano', '984763875','sofia.lopez@gmail.com','busco vacante para mi hijo que tien 10 años'),
('Ana', 'García', '973642745','ana.garcia@gmail.com',' cuando entregaran las calificaciones'),
('Luis', 'Torres', '937462786',' luis.torres@gmail.com','cuando abra reunion para los padres de familia'),
('Sofia', 'Hernández', '9876987432','sofia.hernandez@gmail.com','cauntos vacantes ahra para secundaria'),
('Juan', 'Pérez', '923124546','juan.perez@gmail.com','quiero saber las fechas de aniversario del colegio'),
('Marcela', 'Ramíres', '967589876',' marcela.ramirez@gmail.com','quiero conocer el horario de la primaria '),
('Diego', 'Martínez ', '978612564','diego.martinez@gmail.com','cuando sera la fecha entrega de las notas'),
('Valeria', 'Gómez', '944336785','valeria.gomez@gmail.com','busco vacante para mi hijo que tien 16 años'),
('Carlos', 'Sánchez', '900823456','carlos.sanchez@gmail.com','cuando abra reunion para los padres de familia'),
('Laura', 'González', '912343626','laura.gonzalez@gmail.com','quiero saber las fechas de aniversario del colegio');

select*from registro;