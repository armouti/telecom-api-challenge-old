const express = require('express');
const bodyParser = require('body-parser');
const PhoneNumberTable = require('../database/PhoneNumberTable.js');
const CustomerTable = require('../database/CustomerTable.js');

const phoneNumberTable = new PhoneNumberTable();
const customerTable = new CustomerTable();

const app = express();
app.use(bodyParser.json());

//Returns all phone numbers
app.get('/api/numbers', (req, res) => {
  let phoneNumbers = phoneNumberTable.getAllNumbers();
  res.send({ phoneNumbers });
});

//Activates a phone number
app.put('/api/numbers', (req, res) => {
  phoneNumberTable.activate(req.body.phoneNumber);
  res.send(true);
});

//Returns all numbers associated with a name
app.get('/api/numbers/:fullname', (req, res) => {
  let [first, last] = req.params.fullname.split('_');
  let cid = customerTable.getCIDbyName(first, last);
  let phoneNumbers = phoneNumberTable.getNumbersByCID(cid);
  res.send({ phoneNumbers });
});


module.exports.app = app;

//The exports below are ONLY for testing purposes
//Since The database implementation is a fake in-memory impl
//The same hash-table instances used by app.js need to be exported
//to make testing easier (ie. setup/seeding)
module.exports.phoneNumberTable = phoneNumberTable;
module.exports.customerTable = customerTable;
