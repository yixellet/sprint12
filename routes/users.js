const usersRouter = require('express').Router();
const { users } = require('../data/users');

usersRouter.get('/', (req, res) => {
  res.send(users);
});

usersRouter.get('/:id', (req, res) => {
  if (!users.some((user) => user._id === req.params.id)) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }

  res.send(users.find((user) => user._id === req.params.id));
});

module.exports = usersRouter;
