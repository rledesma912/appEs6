const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {

  // db.Article.findAll().then((articles) => {
  db.Chapter.findAll(
    { include: [{ model: db.Section, as: 'sections', attributes: ['id', 'name'] }]}
  ).then((chapters) => {
    //console.log(`articulos: ${articles}`);

    res.render('index', {
      subtitle1:'Deepak Grover - Hanu Prateek Kunduru',
      chapters: chapters
    });

  });
});

router.get('/variables', (req, res, next) => {

  res.render('variables', {
    title: 'Global declarations',
    subtitle:'Variable Declarations: let, const, and Block Scoping'
  });

});

router.get('/iife', (req, res, next) => {

  res.render('iife', {
    title: 'Immediately Invoked Function Expression',
    subtitle:'Is a JavaScript function that runs as soon as it is defined.'
  });

});
