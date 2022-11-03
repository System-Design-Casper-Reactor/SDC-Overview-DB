 CREATE TABLE IF NOT EXISTS products(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   slogan VARCHAR(255),
   description VARCHAR(255),
   category VARCHAR(255),
   default_price VARCHAR(25)
 );

 CREATE TABLE IF NOT EXISTS features(
   id INT PRIMARY KEY,
   product_id INT,
   feature VARCHAR(25),
   value VARCHAR(25),
   CONSTRAINT fk_product
     FOREIGN KEY(product_id)
       REFERENCES products(id)
 );

 CREATE TABLE IF NOT EXISTS styles(
   id SERIAL PRIMARY KEY,
   product_id INT,
   name VARCHAR(25),
   sale_price VARCHAR(25),
   original_price VARCHAR(25),
   default_style BOOLEAN,
   CONSTRAINT fk_product
     FOREIGN KEY(product_id)
       REFERENCES products(id)
 );

CREATE TABLE IF NOT EXISTS photos(
  id SERIAL PRIMARY KEY,
  style_id INT,
  url VARCHAR(255),
  thumbnail_url VARCHAR(255),
  CONSTRAINT fk_style
    FOREIGN KEY (style_id)
      REFERENCES styles(id)
);

CREATE TABLE IF NOT EXISTS related(
  id SERIAL PRIMARY KEY,
  current_product_id INT,
  related_product_id INT,
  CONSTRAINT fk_product
    FOREIGN KEY(current_product_id)
      REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS skus(
 id SERIAL PRIMARY KEY,
 style_id INT,
 size VARCHAR(25),
 quantity INT,
 CONSTRAINT fk_style
   FOREIGN KEY(style_id)
     REFERENCES styles(id)
)