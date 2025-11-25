const express = require('express');
const router = express.Router();
const { addService, getServices, getIdServices, updateServices, deleteServices } = require('../Controllers/servicesController');

router.post('/create', addService);
router.get('/get', getServices);
router.get('/get/:id', getIdServices);
router.put('/update/:id', updateServices);
router.delete('/delete/:id', deleteServices);

module.exports = router;