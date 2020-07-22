const usersRouter = require('express').Router();
const { users } = require('../data/users');

usersRouter.get('/users', (req, res) => {
  res.send(users);
});

usersRouter.get('/users/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params.id);

  if (!users.some(user => {
    return user._id === req.params.id
  })) {
    res.status(404).send({ "message": "Нет пользователя с таким id" });
    return;
  }

  res.send(users.find(user => {
    return user._id === req.params.id
  }));
})

module.exports = usersRouter;