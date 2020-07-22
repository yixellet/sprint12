const fs = require('fs');
const path = require('path');
const usersRouter = require('express').Router();

const users = fs.readFileSync(path.join(path.resolve(), 'data/users.json'), { encoding: 'utf8' });

usersRouter.get('/', (req, res) => {
  res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  if (!JSON.parse(users).some((user) => user._id === req.params.id)) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }

  res.send(JSON.parse(users).find((user) => user._id === req.params.id));
});

module.exports = usersRouter;
