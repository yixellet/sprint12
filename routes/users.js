const fs = require('fs');
const path = require('path');
const usersRouter = require('express').Router();

const users = fs.createReadStream(path.join(path.resolve(), 'data/users.json'));
usersRouter.get('/', (req, res) => {
  res.set({ 'content-type': 'application/json; charset=utf-8' });
  users.pipe(res);
});

const sendUser = (req, res, usersArray, next) => {
  const userData = usersArray.find((user) => user._id === req.params.id);
  res.send(userData);
  next();
};

const doesUserExists = (req, res, usersArray, next) => {
  if (!JSON.parse(usersArray).some((user) => user._id === req.params.id)) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }
  next();
};
let usersArray = '';
users.on('data', (chunk) => {
  usersArray += chunk.toString();
});
users.on('end', () => {
  console.log(JSON.parse(usersArray)[0]);
});

usersRouter.get('/:id', doesUserExists);
usersRouter.get('/:id', sendUser);

module.exports = usersRouter;
