/*
Create a burgers table with these fields:
id: an auto incrementing int that serves as the primary key.
burger_name: a string.
devoured: a boolean.
date: a TIMESTAMP.
*/
DROP DATABASE if exists burger_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);