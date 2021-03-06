
class ContactDetails {
    
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) {
      let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
      if (firstNameRegex.test(firstName))
        this._firstName = firstName;
      else
        throw "Invalid first Name";
    }
  
    get lastName() { return this._lastName; }
    set lastName(lastName) {
      let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
      if (lastNameRegex.test(lastName))
        this._lastName = lastName;
      else
        throw "Invalid last Name";
    }
  
    get address() { return this._address; }
    set address(address) {
      let addressRegex = RegExp("^[A-Za-z]{4,}$");
      if (addressRegex.test(address))
        this._address = address;
      else
        throw "Invalid address ";
    }
  
    get city() { return this._city; }
    set city(city) {
      let cityRegex = RegExp("^[A-Za-z]{4,}$");
      if (cityRegex.test(city))
        this._city = city;
      else
        throw "Invalid city ";
    }
  
    get state() { return this._state; }
    set state(state) {
      let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
      if (stateRegex.test(state))
        this._state = state;
      else
        throw "Invalid state";
    }
  
    get zip() { return this._zip; }
    set zip(zip) {
      let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
      if (zipRegex.test(zip))
        this._zip = zip;
      else
        throw "Invalid zip ";
    }
  
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
      let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
      if (phoneRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber;
      else
        throw "Invalid phone number";
    }
  
    get email() { return this._email; }
    set email(email) {
      let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
      if (emailRegex.test(email))
        this._email = email;
      else
        throw "Invalid email";
    }
  
    toString() {
      return "First Name: " + this.firstName + ", Last Name: " + this.lastName
        + "\nAddress: " + this.address
        + ", City: " + this.city + ", Zip Code: " + this.zip +
        "\nState: " + this.state + "\nPhone : " + this.phoneNumber + ", Email: " + this.email;
    }
  }
console.log("Welcome to the Address Book Program");
try {
let detailsArray = new Array();
    detailsArray.push(new ContactDetails("Samiksha", "Shende", "RamNagar", "Wardha", "Maharashtra", "442 001",
      "91 7643112366", "shende.samiksha@gmail.com"));
    detailsArray.push(new ContactDetails("Neha", "Diwate", "Nalod", "Ahmedabad", "Gujrat",
      "369 785", "91 7658708428", "neha89@gmail.com"));
    detailsArray.push(new ContactDetails("Apurva", "Ikhe", "Panzarapol", "Vadodara", "Gujrat",
      "963 698", "91 7525752131", "apurva.ikhe@gmail.com"));
    detailsArray.push(new ContactDetails("Pratiksha", "Thute", "Virat", "Airoli", "Maharashra",
      "852 475", "91 8624592165", "pratikshathute@gmail.com"));
    detailsArray.forEach((contact) => console.log(contact.toString()));

    let index = detailsArray.findIndex(contact => contact.firstName == "Pratiksha");
  
    detailsArray[index].zip = "741 658";
    console.log("\ncontacts after being updated\n");
    detailsArray.forEach((contact) => console.log(contact.toString()));

    detailsArray.splice(index, 1);
    console.log("\ncontacts after being deleted\n");
    detailsArray.forEach((contact) => console.log(contact.toString()));

    let totalContacts = 0;
    function FindTotalContacts(detailsArray) {
    if (detailsArray != null)
      totalContacts++;
    return totalContacts;
  }
    detailsArray.reduce(FindTotalContacts, 1);
    console.log(" \nTotal number of contacts in details array  : " + totalContacts);

  let countDuplicate = 0;
  function checkDuplicates(contact) {
    if (contact.firstName == "Samiksha")
      countDuplicate++;
    return countDuplicate;
  }
  
  detailsArray.forEach((contact) => checkDuplicates(contact));
  if (countDuplicate == 1)
    console.log("\nnot a duplicate entry");
  else
    console.log("\nduplicate entry");

  let person =0;
  console.log("\nSearching person by city ");
  function searchPersonCity(detailsArray) {
      if (detailsArray.city == "Vadodara");{
       console.log(detailsArray.toString());
    }
  }

  detailsArray.filter(searchPersonCity);

    function searchPersonState(detailsArray){
     if (detailsArray.state == "Gujrat"){
      console.log(detailsArray.toString());
    }
  }
  
  detailsArray.filter(searchPersonState);

  //Search person by city and state with map
  //search by city
  function searchByCity(contact) {
    return contact.city + "       " + contact.firstName + "        " + contact.lastName;
  }
  let personByCityMap = detailsArray.map(searchByCity);  
  console.log("\nSerching Person by city with map.\n")
  console.log(personByCityMap);
  
  //search by state
  function searchByState(contact) {
    return contact.state + "     " + contact.firstName + "     " + contact.lastName;
  }
  let personByStateMap = detailsArray.map(searchByState);
  console.log("\nSerching Person by state with map.\n")
  console.log(personByStateMap);

  //count number serch by city and state
  //count by city
  let countByCity = 0;
  function countContactByCity(personByCityMap) {
    if (personByCityMap != null)
      countByCity++;
    return countByCity;
  }
  personByStateMap.reduce(countContactByCity, 1);
  console.log("\nTotal number of contacts search by city  : " + countByCity);

  //count by state
  let countByState = 0
  function countContactByState(personByStateMap) {
    if (personByStateMap != null)
      countByState++;
    return countByState;
  }
  personByStateMap.reduce(countContactByState, 1);
  console.log("\nTotal number of contacts search by state  : " + countByState);

  //uc11 sorting by name and printing the array
  function sortByName() {
  for (let details in detailsArray) {
    detailsArray.sort(details.firstName);
  }
  detailsArray.forEach((contact) => console.log(contact.toString()));
}
  console.log("Sorting by firstName");
  sortByName();

  //sorting by city state and zip 
  function sortByCity() {
    for (let details in detailsArray) {
      detailssArray.sort(details.city);
    }
    detailsArray.forEach((contact) => console.log(contact.toString()));
  }

  function sortByState() {
    for (let details in detailsArray) {
      detailsArray.sort(details.state);
    }
    detailsArray.forEach((contact) => console.log(contact.toString()));
  }

  function sortByZip() {
    for (let details in detailsArray) {
      detailsArray.sort(details.zip);
    }
    detailsArray.forEach((contact) => console.log(contact.toString()));
  }
  
  console.log("\nSort By City")
  sortByCity();
  console.log("\nSort By State")
  sortByState();
  console.log("\nSort By Zip")
  sortByZip();
  
}
catch (e) {
  console.log(e);
}

