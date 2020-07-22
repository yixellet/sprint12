const express = require('express');
const path = require('path');
const mainPageRouter = require('express').Router();

const mainPage = (req, res, next) => {
  res.send(express.static(path.join(__dirname, 'public')));
  next();
}

mainPageRouter.get('/', (req, res) => {
  res.send(express.static(path.join(__dirname, 'public')));
});

module.exports = mainPage;