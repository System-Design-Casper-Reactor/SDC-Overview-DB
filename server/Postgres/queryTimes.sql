\timing

SELECT * FROM products OFFSET 1 LIMIT 5;

SELECT json_build_object('id', products.id, 'name', products.name, 'slogan', products.slogan, 'description', products.description, 'category', products.category, 'default_price', products.default_price, 'features', (SELECT array_agg(json_build_object('feature', features.feature, 'value', features.value)) FROM features WHERE products.id=features.product_id)) FROM products WHERE products.id=40347;

SELECT array_to_json(array_agg(related.related_product_id)) FROM related WHERE related.current_product_id=40347;

SELECT json_build_object(
        'product_id', 40347,
          'results', (SELECT
            array_agg(
              json_build_object(
                'style_id', id,
                'name', name,
                'original_price', original_price,
                'sale_price', sale_price,
                'default?', default_style,
                'photos', (SELECT
                  array_agg(
                    json_build_object(
                      'url', url,
                      'thumbnail_url', thumbnail_url
                    )
                  )
                FROM photos WHERE photos.style_id=styles.id),
                'skus', (SELECT
                  json_object_agg(
                    skus.id, json_build_object(
                      'quanity', skus.quantity,
                      'size', skus.size
                    )
                  )
                FROM skus WHERE skus.style_id=styles.id)
              )
            )
        FROM styles WHERE styles.product_id=40347)
      );
\timing