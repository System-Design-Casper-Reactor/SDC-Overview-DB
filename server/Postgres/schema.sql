 DROP TABLE IF EXISTS skus, related, photos, styles, features, products;

 CREATE TABLE IF NOT EXISTS products(
   id SERIAL PRIMARY KEY,
   name TEXT,
   slogan TEXT,
   description TEXT,
   category TEXT,
   default_price TEXT
 );

 CREATE TABLE IF NOT EXISTS features(
   id SERIAL PRIMARY KEY,
   product_id INT,
   feature TEXT,
   value TEXT,
   CONSTRAINT fk_feature
     FOREIGN KEY(product_id)
       REFERENCES products(id)
 );

 CREATE TABLE IF NOT EXISTS styles(
   id SERIAL PRIMARY KEY,
   product_id INT,
   name TEXT,
   sale_price TEXT,
   original_price TEXT,
   default_style BOOLEAN,
   CONSTRAINT fk_style
     FOREIGN KEY(product_id)
       REFERENCES products(id)
 );

CREATE TABLE IF NOT EXISTS photos(
  id SERIAL PRIMARY KEY,
  style_id INT,
  url TEXT,
  thumbnail_url TEXT,
  CONSTRAINT fk_style
    FOREIGN KEY (style_id)
      REFERENCES styles(id)
);

CREATE TABLE IF NOT EXISTS related(
  id SERIAL PRIMARY KEY,
  current_product_id INT,
  related_product_id INT,
  CONSTRAINT fk_related
    FOREIGN KEY(current_product_id)
      REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS skus(
 id SERIAL PRIMARY KEY,
 style_id INT,
 size TEXT,
 quantity INT,
 CONSTRAINT fk_sku
   FOREIGN KEY(style_id)
     REFERENCES styles(id)
);



\COPY products(id, name, slogan, description, category, default_price) FROM './data/product.csv' DELIMITER ',' csv header;
\COPY features(id, product_id, feature, value) FROM './data/features.csv' DELIMITER ',' csv header;
\COPY styles(id, product_id, name, sale_price, original_price, default_style) FROM './data/styles.csv' DELIMITER ',' csv header;
\COPY photos(id, style_id, url, thumbnail_url) FROM './data/photos.csv' DELIMITER ',' csv header;
\COPY related(id, current_product_id, related_product_id) FROM './data/related.csv' DELIMITER ',' csv header;
\COPY skus(id, style_id, size, quantity) FROM './data/skus.csv' DELIMITER ',' csv header;

SELECT setval(pg_get_serial_sequence('products', 'id'), (select max(id) from products));
SELECT setval(pg_get_serial_sequence('features', 'id'), (select max(id) from features));
SELECT setval(pg_get_serial_sequence('styles', 'id'), (select max(id) from styles));
SELECT setval(pg_get_serial_sequence('photos', 'id'), (select max(id) from photos));
SELECT setval(pg_get_serial_sequence('related', 'id'), (select max(id) from related));
SELECT setval(pg_get_serial_sequence('skus', 'id'), (select max(id) from skus));