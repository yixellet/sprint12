const fs = require('fs');
const path = require('path');
const cardsRouter = require('express').Router();

const reader = fs.createReadStream(path.join(path.resolve(), 'data/cards.json'), { encoding: 'utf8' });

cardsRouter.get('/', (req, res) => {
  res.send(reader.pipe(res));
});

module.exports = cardsRouter;
