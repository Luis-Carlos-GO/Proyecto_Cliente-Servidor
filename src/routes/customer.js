const express = require('express');
const router = express.Router();


const customerController = require ('../controllers/customerController');

const rutinaController = require('../controllers/rutinaController');

const ejercicioController = require('../controllers/ejercicioController');

const rutinaEjercicioController = require('../controllers/rutinaEjercicioController');

const registroEjercicioController = require('../controllers/registroEjercicioController');

const composicionCorporalController = require('../controllers/composicionCorporalController');

//metodos de customer
router.get('/clientes', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);


router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

//otras rutas
router.get('/admin',customerController.admin);
router.get('/menu', customerController.menu);
router.get('/preferences',customerController.preferences);
router.get('/profile',customerController.profile);
router.get('/workpage',customerController.workpages);
router.get('/signin',customerController.signin);
router.get('/',customerController.login);
router.get('/rutinas_user',rutinaController.list_user);

//metodos de rutinas
router.get('/rutinas', rutinaController.list);
router.post('/rutinas/add', rutinaController.save);
router.get('/rutinas/delete/:id', rutinaController.delete);

router.get('/rutinas/update/:id', rutinaController.edit);
router.post('/rutinas/update/:id', rutinaController.update);

//metodos de ejercicios
router.get('/ejercicios', ejercicioController.list);
router.post('/ejercicios/add', ejercicioController.save);
router.get('/ejercicios/delete/:id', ejercicioController.delete);

router.get('/ejercicios/update/:id', ejercicioController.edit);
router.post('/ejercicios/update/:id', ejercicioController.update);

router.get('/ejercicio',ejercicioController.liste);



//metodos de Rutina Ejercicios
router.get('/rutinaejercicios', rutinaEjercicioController.list);

//metodos de Registro Ejercicios
router.get('/registroejercicios', registroEjercicioController.list);

//metodos de Composicion Corporal
router.get('/composicioncorporal', composicionCorporalController.list);

module.exports = router;