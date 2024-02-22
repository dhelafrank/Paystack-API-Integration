// paymentController.js

const PaymentService = require('../utils/paystack');

const paymentService = new PaymentService();

exports.initializePayment = async (req, res) => {
    try {
        const response = await paymentService.initializePayment(req.body);
        res.status(201).json({ status: "Success", data: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Failed", message: error.message });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const response = await paymentService.verifyPayment(req.query);
        res.status(201).json({ status: "Success", data: response });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};

exports.getPayment = async (req, res) => {
    try {
        const response = await paymentService.paymentReceipt(req.body);
        res.status(201).json({ status: "Success", data: response });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};
