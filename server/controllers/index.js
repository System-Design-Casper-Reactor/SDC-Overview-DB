const models = require('../models');

module.exports = {
  get: (req, res) => {
    models
      .getAll(req.query.page, req.query.count)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },

  getOne: (req, res) => {
    models
      .getOne(req.query.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },

  getRelated: (req, res) => {
    models
      .getRelated(req.query.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },

  getStyles: (req, res) => {
    models
      .getStyles(req.query.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },

  loader: (req, res) => {
    res.status(200).send('loaderio-77f220b41a4dd42ca3ffdaacb52c79ee');
  },
};
