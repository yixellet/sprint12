const errorRouter = require('express').Router();

errorRouter.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = cardsRouter;