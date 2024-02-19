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