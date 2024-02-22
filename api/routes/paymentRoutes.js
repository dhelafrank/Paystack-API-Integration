// paymentRoutes.js

const express = require('express');
const { initializePayment, verifyPayment, getPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post("/initialize", initializePayment);
router.get('/verifyPayment', verifyPayment);
router.post('/getPayment', getPayment);

module.exports = router;
