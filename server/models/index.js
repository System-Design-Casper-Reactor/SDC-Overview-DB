const pool = require('../db');

module.exports = {
  getAll: async (page = 1, count = 5) => {
    const client = await pool.connect();
    try {
      const response = await client.query(
        `SELECT * FROM products OFFSET ${(page - 1) * count} LIMIT ${count}`
      );
      client.release();
      return response.rows;
    } catch (error) {
      console.error(error.stack);
      client.release();
    }
  },

  getOne: async (id = 1) => {
    console.log('INSIDE OF GET ONE');
    const client = await pool.connect();
    try {
      const response = await client.query(
        `SELECT json_build_object('id', products.id, 'name', products.name, 'slogan', products.slogan, 'description', products.description, 'category', products.category, 'default_price', products.default_price, 'features', (SELECT array_agg(json_build_object('feature', features.feature, 'value', features.value)) FROM features WHERE products.id=features.product_id)) FROM products WHERE products.id=${id}`
      );
      client.release();
      return response.rows;
    } catch (error) {
      console.error(error.stack);
      client.release();
    }
  },

  getRelated: async (id = 1) => {
    console.log('INSIDE OF GET RELATED');
    const client = await pool.connect();
    try {
      const response = await client.query(
        `SELECT array_to_json(array_agg(related.related_product_id)) FROM related WHERE related.current_product_id=${id}`
      );
      client.release();
      return response.rows;
    } catch (error) {
      console.error(error.stack);
      client.related();
    }
  },

  getStyles: async (id = 1) => {
    console.log('INSIDE OF STYLES');
    const client = await pool.connect();
    try {
      const response = await client.query(``);
      client.release();
    } catch (error) {
      console.error(error.stack);
      client.related();
    }
  },
};
