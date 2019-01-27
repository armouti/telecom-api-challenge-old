# ImaginaryTeleCo phone-numbers API
This is an API that provides access to ImaginaryTeleCo's customer phone numbers.  

## Contents
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [PhoneNumber Model](#phonenumber-model)
- [Customer Model](#customer-model)
- [Helper Functions](#helper-functions)
- [Tests](#tests)
- [FAQ](#faq)

## Getting Started

## API Endpoints

## PhoneNumberTable DB Model
`.addNumber(phoneNumber, customer_id, isActivated)`  
`.activate(phoneNumber)`  
`.getNumberInfo(phoneNumber)`  
`.getNumbersByCID(customer_id)`  


**`.addNumber(phoneNumber, customer_id, isActivated)`**  
  -  `phoneNumber`: `<string>`
  -  `customer_id`: `<integer>`
  -  `isActivated`: `<boolean>`
RETURNS: `<boolean>`
`true` if stored successfully, `false` otherwise.  
Stores a new phone number in the PhoneNumber database;  

**`.activate(phoneNumber)`**  
  -  `phoneNumber`: `<string>`  
RETURNS: `<boolean>` - `true` if activation is successfull, `false` if number does not exists or operation was unsuccessfull.  
Activates a saved phone number.  

**`.getNumberInfo(phoneNumber)`**  
  -  `phoneNumber`: `<string>`
RETURNS: PhoneNumber Information `<object>` 
FORMAT: `{ customer_id: <int>, isActivated: <boolean> }`
Retrieves all information associated with a stored Phone Number  

**`.getNumbersByCID(customer_id)`**  
  -  `customer_id`: `<integer>`
RETURNS: All Phone Numbers Associated with the customer_id `Array<string>`
FORMAT: `[phoneNumber1<string>, phoneNumber2<string>, ...]`  
Retrieves all phone numbers associated with a customer ID  

## CustomerTable DB Model


#### Methods:  


#### Reference:

## Helper Functions


## Tests

## FAQ