const fs = require('fs');
const path = require('path');
const usersRouter = require('express').Router();

usersRouter.get('/', (req, res) => {
  const users = fs.createReadStream(path.join(path.resolve(), 'data/users.json'));
  res.status(200).set({ 'content-type': 'application/json; charset=utf-8' });
  users.pipe(res);
  users.on('error', () => {
    res.status(404).send({ message: 'Файл не найден' });
  });
});

usersRouter.get('/:id', (req, res) => {
  const json = JSON.parse(fs.readFileSync(path.join(path.resolve(), 'data/users.json'), 'utf8'));
  if (!json.some((user) => user._id === req.params.id)) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }
  res.status(200).send(json.find((user) => user._id === req.params.id));
});

module.exports = usersRouter;
