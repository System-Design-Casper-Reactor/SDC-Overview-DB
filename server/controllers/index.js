const models = require('../models');

module.exports = {

  get: (req, res) => {
    models.getAll(req.query.page, req.query.count)
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((error) => {
        res.status(404).send(error)
      })
  },

  getOne: (req, res) => {
    models.getOne()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send(error);
      })
  },

  getRelated: (req,res) => {
    models.getRelated()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send(error);
      })
  },

  getStyles: (req,res) => {
    models.getStyles()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.status(404).send(error);
      })
  }
}