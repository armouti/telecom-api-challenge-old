class CustomerTable {
  constructor(){
    this.store = {};
    this.simpleIndex = 0;
  }

  addCustomer(first_name, last_name) {
    first_name = first_name.toLowerCase();
    last_name = last_name.toLowerCase();
    if(!first_name || !last_name) return false;
    this.store[this.simpleIndex] = { first_name, last_name };

    //to return the correct index after incrementing the local index
    const prevIndex = this.simpleIndex;
    this.simpleIndex += 1;
    return prevIndex;
  }

  getCustomerById(cid) {
    return this.store[cid];
  }

  getCustomerByName(){}

  getCIDbyName(first_name, last_name){
    for(let cid in this.store){
      let customer = this.store[cid]
      let isFound = customer.first_name === first_name && customer.last_name === last_name;
      if(isFound) return Number(cid);
    }
    return false;
  }
}

module.exports = CustomerTable;
