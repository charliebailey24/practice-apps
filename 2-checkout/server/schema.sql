CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS responses (
  id INT NOT NULL AUTO_INCREMENT,
  add_line_1 VARCHAR(100),
  add_line_2 VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(50),
  zipcode INT,
  phone_number INT,
  cc_number INT,
  expiry_date INT,
  cvv INT,
  billing_zipcode INT,
  session_id VARCHAR(200),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(20) NOT NULL,
  responses_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (responses_id) REFERENCES responses(id)
);



