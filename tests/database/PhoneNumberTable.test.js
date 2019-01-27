const PhoneNumberTable = require('../../database/PhoneNumberTable.js');

describe('PhoneNumber DB Model', () => {
  const phoneNumberTable = new PhoneNumberTable();
  const testNumber = '07583749326';
  const testNumber2 = '07553745321'
  const testId = 100;

  test('Adds a new phone number', () => {
    phoneNumberTable.addNumber(testNumber, testId, false);
    expect(phoneNumberTable.getNumberInfo(testNumber)).toBeTruthy();
  });

  test('Activates a phone number', () => {
    phoneNumberTable.activate(testNumber);
    const isActive = phoneNumberTable.getNumberInfo(testNumber).isActive;
    expect(isActive).toBeTruthy();
  });

  test('Retrieves all numbers by customer_id', () => {
    //adding another number
    phoneNumberTable.addNumber(testNumber2, testId);

    const num = phoneNumberTable.getNumbersByCID(testId);
    expect(num).toEqual([testNumber, testNumber2]);
  });
})