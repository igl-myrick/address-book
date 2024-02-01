// AddressBook Business Logic
function AddressBook() {
  this.contacts = {};
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts[contact.firstName] = contact;
};

// Contacts Business Logic
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};