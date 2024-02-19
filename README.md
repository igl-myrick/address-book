# _Address Book_

#### By _**India Lyon-Myrick**_

#### _An address book program._

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_A webpage designed to mimic an address book. You can add contacts, and store their name, phone number, email addresses, and physical addresses._

## Setup/Installation Requirements

* _Clone the repository to a folder of choice on your machine (by either using the "Code" button on the GitHub page, or in a terminal application using `git clone https://github.com/igl-myrick/address-book`)_
* _Using a file explorer or terminal application, open the top level of the folder_
* _Open index.html_

## Known Bugs

* _None_

## License

MIT:

Copyright (c) _2/19/2024_ _India Lyon-Myrick_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Tests

Describe: AddressBook

Test: It should create an AddressBook Object.
Code: let newAddressBook = new AddressBook();
Expect: newAddressBook = { contacts: {}, currentID: 0 }

Describe: AddressBook.prototype.addContact

Test: It should add a new Contact to the AddressBook.
Code: newAddressBook.addContact(contact);
Expect: newAddressBook = { contacts : { 1: contact }, currentID: 1 }

Describe: AddressBook.prototype.assignID

Test: It should increase the ID number for each contact added to the AddressBook.
Code: 
let newAddressBook = new AddressBook();
let currentIDResult = newAddressBook.assignID();
Expect: newAddressBook.currentID = 1;
Expect: currentIDResult = 1;

Describe: AddressBook.prototype.findContact

Test: It should find a contact in the AddressBook based on the contact's ID.
Code: 
let newAddressBook = new AddressBook();
let newContact = new Contact();
newAddressBook.addContact(newContact);
newAddressBook.findContact(1);
Expect: newContact { ... }

Describe: AddressBook.deleteContact

Test: It should remove a Contact from the AddressBook.
Code:
let newAddressBook = new AddressBook();
let newContact = new Contact();
newAddressBook.addContact(newContact);
newAddressBook.deleteContact(newContact);
Expect: newAddressBook.contacts = {}

Describe: Contact

Test: It should create a new Contact object.
Code: let newContact = new Contact("John", "Smith", "123-456-7890");
Expect: newContact = { firstName: "John", lastName: "Smith", phoneNumber: "123-456-7890" }

Describe: Contact.prototype.fullName

Test: It should display the combined firstName & lastName values of a Contact.
Code:
let newContact = new Contact("John", "Smith", "123-456-7890");
let fullNameResult = newContact.fullName();
Expect: fullNameResult = "John Smith";

Describe: Contact.prototype.update

Test: It should update a Contact's information with new information.
Code: 
let newContact = new Contact("John", "Smith", "123-456-7890");
newContact.update("John", "Doe", "0987-654-321")
Expect: newContact = { firstName: "John", lastName: "Doe", phoneNumber: "0987-654-321" }

Describe: Address

Test: It should create a new Address object.
Code: let newAddress = new Address("1234 ABC Street", "home", "address")
Expect: newAddress = { addressName: "1234 ABC Street", addressType: "home", addressCategory, "address" }

Describe: Contact.prototype.addAddress

Test: It should add an Address object of emailAddress to a Contact.
Code: 
let newContact = new Contact("John", "Smith", "123-456-7890");
let newEmailAddress = new Address("johnsmith@email.com", "personal", "email")
newContact.addAddress(newEmailAddress)
Expect: newContact.addresses.emailAddresses = [{ addressName: "johnsmith@email.com", addressType: "personal", addressCategory: "email" }]

Test: It should add an Address object of physicalAddress to a Contact.
Code: 
let newContact = new Contact("John", "Smith", "123-456-7890");
let newPhysicalAddress = new Address("1234 ABC Street", "home", "physical")
newContact.addAddress(newPhysicalAddress)
Expect: newContact.addresses.physicalAddresses = [{ addressName: "1234 ABC Street", addressType: "home", addressCategory: "physical" }]