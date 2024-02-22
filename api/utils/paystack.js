// paystack.js
require('dotenv').config()
const axios = require('axios');
require('dotenv').config();

class PaystackService {
    constructor() {
        this.MySecretKey = process.env.TEST_SECRET_KEY;
    }

    async initializePayment(form) {
        try {
            const options = {
                method: 'post',
                url: 'https://api.paystack.co/transaction/initialize',
                headers: {
                    Authorization: `Bearer ${this.MySecretKey}`,
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                },
                data: form
            };
            const response = await axios(options);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async verifyPayment(ref) {
        try {
            const options = {
                method: 'get',
                url: `https://api.paystack.co/transaction/verify/${encodeURIComponent(ref)}`,
                headers: {
                    Authorization: `Bearer ${this.MySecretKey}`,
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            };
            const response = await axios(options);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PaystackService;
