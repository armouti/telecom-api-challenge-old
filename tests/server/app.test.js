const request = require('supertest');
const { 
  app, 
  phoneNumberTable,
  customerTable
} = require('../../server/app.js');

//SETUP--------------
//john doe - phoneNum1, phoneNum2
//jane moe - phoneNum3
const id1 = customerTable.addCustomer('John', 'Doe');
const phoneNum1 = '07573828495';
const phoneNum2 = '07573828495';
phoneNumberTable.addNumber(phoneNum1, id1, false);
phoneNumberTable.addNumber(phoneNum2, id1, false);

const id2 = customerTable.addCustomer('Jane', 'Moe');
const phoneNum3 = '07306821255';
phoneNumberTable.addNumber(phoneNum3, id2, false);
//-----------------

describe('GET /api/numbers', () => {

  test('Responds to a GET request', (done) => {
    return request(app).get('/api/numbers').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Returns all stored phone numbers', () => {
    return request(app).get('/api/numbers').then((response) => {
      //Performing three .toContain tests instead of .toEqual because
      //.toEqual will fail if the order of elements in the array
      //is different
      expect(response.body.phoneNumbers).toContain(phoneNum1);
      expect(response.body.phoneNumbers).toContain(phoneNum2);
      expect(response.body.phoneNumbers).toContain(phoneNum3);
    });
  });
});

describe('GET /api/numbers/:fullname', () => {
  test('Responds to a GET request', () => {
    return request(app).get('/api/numbers/john_doe').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('Returns all phone numbers for a stored customer', () => {
    return request(app).get('/api/numbers/john_doe').then((response) => {
      expect(response.body.phoneNumbers).toContain(phoneNum1);
      expect(response.body.phoneNumbers).toContain(phoneNum2);
    });
  });
});

describe('PUT /api/numbers', () => {
  test('Responds to a PUT request', () => {
    return request(app).put('/api/numbers')
    .send({ phoneNumber: phoneNum1 })
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test('Changes the .isActive property of a phoneNumber to TRUE', () => {
    return request(app).put('/api/numbers')
    .send({ phoneNumber: phoneNum3 })
    .then((response) => {
      const isActive = phoneNumberTable.getNumberInfo(phoneNum3).isActive;
      expect(isActive).toBeTruthy();
    });
  })
});
