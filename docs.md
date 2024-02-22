# API Documentation for this project

## API Endpoints

- <b>POST /api/v1/initialize:</b> initialize a new transaction
- <b>GET /api/v1/verifyPayment:</b> Verify  a transaction
- <b>POST /api/v1/getPayment:</b> Get transaction reciept

### Initialize Payments

When initializing a new payment, a post request is made to the initialize  endpoint. The body of the request should contain JSON with the following fields:

```
firstName,
lastName,
email,
amount
```

if successful, response will come in json:
```
{
  "status": true,
  "message": "Authorization URL created",
  "data": {
    "authorization_url": "https://checkout.paystack.com/0peioxfhpn",
    "access_code": "0peioxfhpn",
    "reference": "[7PVGX8MEk85tgeEpVDtD]"
  }
}
```

copy the authorization url to proceed with poayment


### Verify Payments
a get request is made to the endpoint with the payment refrence as a url parameter, example `/api/v1/verifyPayment/0peioxfhpn`

response will come in json
```
{
  "status": true,
  "message": "Verification successful",
  "data": {
    "id": 2009945086,
    "domain": "test",
    "status": "success",
    "reference": "rd0bz6z2wu",
    "amount": 20000,
    "message": null,
    "gateway_response": "Successful",
    "paid_at": "2022-08-09T14:21:32.000Z",
    "created_at": "2022-08-09T14:20:57.000Z",
    "channel": "card",
    "currency": "NGN",
    "ip_address": "100.64.11.35",
    "metadata": ""
    }
    //
}
```
### Transaction Receipts
This endpoint returns a transaction information object that could serve as a receipt

Refer to the official [paystack documentation](https://paystack.com/docs/api/transaction) to understand different transaction options you could modify clone and modify the project to suit your needs.
