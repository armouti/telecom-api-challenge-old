class PhoneNumberTable {
  constructor(){
    this.store = {};
  }
  //not including much feedback and error handling within methods
  //due to time constraints of challenge
  //just a simple true or false at this point
  addNumber(num, customer_id, isActive = false) {
    if(this.store[num]) return false;
    this.store[num] = { customer_id, isActive };
    return true;
  }

  activate(num) {
    if(!this.store[num]) return false
    this.store[num].isActive = true;
    return true;
  }

  getNumberInfo(num) {
    return this.store[num];
  }
  
  getNumbersByCID(cid) {
    //using Object.entries for declarative programming (readability)
    //for-in can be used for more efficient space-complexity
    return Object.entries(this.store)
      .reduce((numArray, [num, details]) => {
        if(details.customer_id === cid) numArray.push(num);
        return numArray;
      }, []);
  }

  getAllNumbers(){
    return Object.keys(this.store);
  }
}

module.exports = PhoneNumberTable;