// AddressBook Business Logic
function AddressBook() {
  this.contacts = {};
  this.currentID = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignID();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}

// Contacts Business Logic
function Contact(firstName, lastName, phoneNumber) {
  this.addresses = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.addresses.emailAddress = [];
  this.addresses.address = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Contact.prototype.update = function(newFirstName, newLastName, newPhoneNumber, newEmailAddress, newAddress) {
  this.firstName = newFirstName;
  this.lastName = newLastName;
  this.phoneNumber = newPhoneNumber;
  this.addresses.emailAddress = newEmailAddress;
  this.addresses.address = newAddress;
};

Contact.prototype.addEmailAddress = function(emailAddress, emailType) {
  this.addresses.emailAddress = emailAddress;
  this.addresses.emailType = emailType;
}

Contact.prototype.addAddress = function(address, addressType) {
  this.addresses.address = address;
  this.addresses.addressType = addressType;
}

// UI Logic
let addressBook = new AddressBook();

function listContacts(addressBookToDisplay) {
  let contactsDiv = document.querySelector("div#contacts");
  contactsDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    const li = document.createElement("li");
    li.append(contact.fullName());
    li.setAttribute("id", contact.id);
    ul.append(li);
  });
  contactsDiv.append(ul);
}

function displayContactDetails(event) {
  const contact = addressBook.findContact(event.target.id);
  document.querySelector("#first-name").innerText = contact.firstName;
  document.querySelector("#last-name").innerText = contact.lastName;
  document.querySelector("#phone-number").innerText = contact.phoneNumber;
  document.querySelector("#email-address").innerText = contact.addresses.emailAddress;
  document.querySelector("#email-type").value = contact.addresses.emailType;
  document.querySelector("#address").innerText = contact.addresses.address;
  document.querySelector("#address-type").value = contact.addresses.addressType;
  document.querySelector("button.delete").setAttribute("id", contact.id);
  document.querySelector("div#contact-details").removeAttribute("class");
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  const inputtedEmailAddress = document.querySelector("input#new-email-address").value;
  const inputtedEmailType = document.getElementById("email-type").value;
  const inputtedAddress = document.querySelector("input#new-address").value;
  const inputtedAddressType = document.getElementById("address-type").value;
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
  newContact.addEmailAddress(inputtedEmailAddress, inputtedEmailType);
  newContact.addAddress(inputtedAddress, inputtedAddressType);
  console.log(newContact)
  addressBook.addContact(newContact);
  listContacts(addressBook);
  document.querySelector("input#new-first-name").value = null;
  document.querySelector("input#new-last-name").value = null;
  document.querySelector("input#new-phone-number").value = null;
  document.querySelector("input#new-email-address").value = null;
  document.querySelector("input#new-address").value = null;
}

function handleDelete(event) {
  addressBook.deleteContact(event.target.id);
  document.querySelector("button.delete").removeAttribute("id");
  document.querySelector("div#contact-details").setAttribute("class", "hidden");
  listContacts(addressBook);
}

window.addEventListener("load", function() {
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#contacts").addEventListener("click", displayContactDetails);
  document.querySelector("button.delete").addEventListener("click", handleDelete);
});