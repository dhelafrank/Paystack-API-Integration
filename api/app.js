var express = require('express');
var apiVersion = "/api/v1"
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = process.env.PORT || 3000
const db = require('./mod/db')
var paymentRouter = require('./routes/paymentRoutes');

var app = express();
db()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(`${apiVersion}/pay`, paymentRouter);

app.listen(PORT, ()=>{
    console.log(`Server is now listening on port ${PORT}`);
})