# ImaginaryTeleCo phone-numbers API
This is an API that provides access to ImaginaryTeleCo's customer phone numbers.  

## Contents
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [PhoneNumberTable DB model](#phonenumber-db-model)
- [CustomerTable DB Model](#customertable-db=model)
- [Project Guidelines](#project-guidelines)
- [Tests](#tests)
- [FAQ](#faq)

## Getting Started

To get started with the project:
- `git clone https://github.com/armouti/telecom-api-challenge.git`
- `cd telecom-api-challenge`
- `npm install && npm run`  

## API Endpoints

#### `GET /api/numbers`  
Returns all phone numbers in the system.  
- params: none;  
- Content:  
```
{ 
  numbers: [
    phoneNumber1<string>, 
    phoneNumber2<string>,
    phoneNumber3<string>,
    ...
  ]
}
```  

#### `GET /api/numbers/:fullname`  
Returns all phone numbers associated with the fullname in the system.
- URL params: fullname = `firstName_lastName` (first and last names MUST be seperated by underscore char)
- Content:
```
{ 
  numbers: [
    phoneNumber1<string>, 
    phoneNumber2<string>,
    phoneNumber3<string>,
    ...
  ]
}
```  

#### `PUT /api/numbers`  
Activates the phone number provided in the body.
(given it's already stored in the system).
- Body params: `{ phoneNumber: <string> }`
- Content: `true` (if successful)

## PhoneNumberTable DB Model
  
**`.addNumber(phoneNumber, customer_id, isActivated)`**  
  -  `phoneNumber`: `<string>`
  -  `customer_id`: `<integer>`
  -  `isActivated`: `<boolean>`  
**RETURNS**: `<boolean>`  
`true` if stored successfully, `false` otherwise.  
Stores a new phone number in the PhoneNumber database;  

**`.activate(phoneNumber)`**  
  -  `phoneNumber`: `<string>`  
**RETURNS**: `<boolean>` - `true` if activation is successfull, `false` if number does not exists or operation was unsuccessfull.  
Activates a saved phone number.  

**`.getNumberInfo(phoneNumber)`**  
  -  `phoneNumber`: `<string>`  
**RETURNS**: PhoneNumber Information `<object>`  
**FORMAT**: `{ customer_id: <int>, isActivated: <boolean> }`  
Retrieves all information associated with a stored Phone Number  

**`.getNumbersByCID(customer_id)`**  
  -  `customer_id`: `<integer>`  
**RETURNS**: All Phone Numbers Associated with the customer_id `Array<string>`  
**FORMAT**: `[phoneNumber1<string>, phoneNumber2<string>, ...]`  
Retrieves all phone numbers associated with a customer ID  

## CustomerTable DB Model
**`.addCustomer(firstName, lastName)`**  
  -  `firstName`: `<string>`
  -  `lastName`: `<string>`  
**RETURNS**: newly-created customer ID `<int>`  
Stores a new customer name in the customers database;  

**`.getCustomerById(cid)`**  
  -  `cid`: `<int>`  
**RETURNS**: customer info `<object>`  
Retrieves customer info associated with cid.  

**`.getCIDbyName(firstName, lastName)`**  
  -  `firstName`: `<string>`
  -  `lastName`: `<string>`  
**RETURNS**: customer ID (cid) `<int>`  
Retrieves the cid of the customer with the passed firstName and lastName.  

## Project Guidelines
cid = customer id
#### Naming Convention:
- Use snake_casing for DB variable names
- Use camelCasing for all other variable names

## Tests
To run the tests, simple invoke:  
`npm test`  

## FAQ