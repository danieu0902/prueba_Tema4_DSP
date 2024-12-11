DROP DATABASE IF EXISTS hospital;
CREATE DATABASE hospital;
USE hospital;
CREATE TABLE medicos (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(200) NOT NULL,
  especialidad VARCHAR(200),
  perfil ENUM('RESIDENTE, ESPECIALISTA'),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- ALTER TABLE productos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;
INSERT INTO
  medicos (nombre, especialidad, perfil)
VALUES
  ('Pepe Muñoz', 'Dermatologo', 'ESPECIALISTA'),
  ('Adrian Cejudo', 'Cirujano', 'ESPECIALISTA'),
  ('Carlos Pastor', 'Pediatría', 'RESIDENTE');
DROP TABLE IF EXISTS pacientes;
CREATE TABLE pacientes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    fecha_nacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
-- ALTER TABLE productos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;
INSERT INTO
  pacientes (nombre, localidad, fecha_nacimiento)
VALUES
  ('Emilio perez', 'Puente Genil', '2004-10-23'),
  ('Juan Ramirez', 'Benameji', '2000-11-10'),
  ('Elena Gomez', 'Lucena', '1996-03-30');