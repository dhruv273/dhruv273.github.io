/*
File Name : index.js
Student Name : Dhruv vyas 
Student Id : 100734385
Date : 7-april-2020
*/
let express = require('express');
let router = express.Router();

let controllers = require('../controllers/index');

/* ROUTES SECTION */
/*
/* GET home page. */
router.get('/', (req, res, next) => {
  controllers.displayHome(res);
});

router.get('/home', (req, res, next) => {
  controllers.displayHome(res);
});

/* GET about page */
router.get('/about', (req, res, next) =>
  {
    controllers.displayAbout(res);
});

/* GET contact page */
router.get('/contact', (req, res, next) =>
  {
    controllers.displayContact(res);
});

/* GET products page */
router.get('/projects', (req, res, next) =>
  {
    controllers.displayProjects(res);
});

/* GET services page */
router.get('/services', (req, res, next) =>
  {
    controllers.displayServices(res);
});




module.exports = router;
