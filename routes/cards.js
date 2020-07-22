const fs = require('fs');
const path = require('path');
const cardsRouter = require('express').Router();

cardsRouter.get('/', (req, res) => {
  const cards = fs.createReadStream(path.join(path.resolve(), 'data/cards.json'), { encoding: 'utf8' });
  res.set({ 'content-type': 'application/json; charset=utf-8' });
  cards.pipe(res);
});

module.exports = cardsRouter;
