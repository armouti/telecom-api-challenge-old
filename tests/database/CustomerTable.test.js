const CustomerTable = require('../../database/CustomerTable.js');

describe('Customer DB Model', () => {
  //SETUP----------------------
  const customerTable = new CustomerTable();
  const firstName = 'john';
  const lastName = 'doe';
  const id = customerTable.addCustomer(firstName, lastName);
  //--------------------------
  
  test('Creates New customer', () => {
    expect(customerTable.getCustomerById(id)).toBeTruthy();
  });
  
  test('Retrieves customer_id by name', () => {
    expect(customerTable.getCIDbyName(firstName, lastName)).toEqual(id);
  });

  test('Retrieves customer info by custome_id', () => {
    //it's convention that DB values are named with underscore
    //naming as opposed to camelCasing
    const expectedInfo = { first_name: firstName, last_name: lastName }
    expect(customerTable.getCustomerById(id)).toEqual(expectedInfo);
  });
});