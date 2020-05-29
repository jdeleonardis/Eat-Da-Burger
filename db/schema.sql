-- Drops the burgers_db
DROP DATABASE IF EXISTS burgers_db;

-- Create the database
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30) NOT NULL,
  devoured bool not null default false,
  PRIMARY KEY (id)
);