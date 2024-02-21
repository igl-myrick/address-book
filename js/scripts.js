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
  this.addresses = { emailAddresses: [], physicalAddresses: [] };
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
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

Contact.prototype.addAddress = function(address) {
  if (address.addressCategory === "email") {
    this.addresses.emailAddresses.push(address);
  } else {
    this.addresses.physicalAddresses.push(address);
  }
}

function Address(addressName, addressType, addressCategory) {
  this.addressName = addressName;
  this.addressType = addressType;
  this.addressCategory = addressCategory;
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

function addNewEmailFieldToForm() {
  const allEmailsDiv = document.getElementById("email-addresses");

  const newEmailWrapperDiv = document.createElement("div");
  newEmailWrapperDiv.classList.add("email-address");

  // create email address form group & add to wrapper
  const newInputFormGroupDiv = document.createElement("div");
  newInputFormGroupDiv.classList.add("form-group");

  const newEmailLabel = document.createElement("label");
  newEmailLabel.innerText = "Email Address:";

  const newEmailInput = document.createElement("input");
  newEmailInput.setAttribute("type", "text");
  newEmailInput.setAttribute("class", "form-control");

  newInputFormGroupDiv.appendChild(newEmailLabel);
  newInputFormGroupDiv.appendChild(newEmailInput);
  newEmailWrapperDiv.appendChild(newInputFormGroupDiv);

  // create select list form group & add to wrapper
  const newSelectFormGroupDiv = document.createElement("div");
  newSelectFormGroupDiv.classList.add("form-group");

  const newInputLabel = document.createElement("label");
  newInputLabel.innerText = "Email Type: ";

  const newSelectGroup = document.createElement("select");

  const newOption1 = document.createElement("option");
  newOption1.setAttribute("value", "personal");
  newOption1.innerText = "Personal";

  const newOption2 = document.createElement("option");
  newOption2.setAttribute("value", "work");
  newOption2.innerText = "Work";

  const newOption3 = document.createElement("option");
  newOption3.setAttribute("value", "school");
  newOption3.innerText = "School";

  newSelectGroup.append(newOption1, newOption2, newOption3);
  newSelectFormGroupDiv.append(newInputLabel);
  newSelectFormGroupDiv.append(newSelectGroup);
  newEmailWrapperDiv.append(newSelectFormGroupDiv);

  // add to DOM
  allEmailsDiv.append(newEmailWrapperDiv);
}

function addNewPhysicalAddressFieldToForm() {
  const allPhysicalAddressesDiv = document.getElementById("physical-addresses");

  const newPhysicalAddressWrapperDiv = document.createElement("div");
  newPhysicalAddressWrapperDiv.classList.add("physical-address");

  // create physical address form group & add to wrapper
  const newInputFormGroupDiv = document.createElement("div");
  newInputFormGroupDiv.classList.add("form-group");

  const newPhysicalAddressLabel = document.createElement("label");
  newPhysicalAddressLabel.innerText = "Address";
  
  const newPhysicalAddressInput = document.createElement("input");
  newPhysicalAddressInput.setAttribute("type", "text");
  newPhysicalAddressInput.setAttribute("class", "form-control");

  newInputFormGroupDiv.appendChild(newPhysicalAddressLabel);
  newInputFormGroupDiv.appendChild(newPhysicalAddressInput);
  newPhysicalAddressWrapperDiv.appendChild(newInputFormGroupDiv);

  // create select list form group & add to wrapper
  const newSelectFormGroupDiv = document.createElement("div");
  newSelectFormGroupDiv.classList.add("form-group");

  const newInputLabel = document.createElement("label");
  newInputLabel.innerText = "Address Type: ";

  const newSelectGroup = document.createElement("select");

  const newOption1 = document.createElement("option");
  newOption1.setAttribute("value", "home");
  newOption1.innerText = "Home";

  const newOption2 = document.createElement("option");
  newOption2.setAttribute("value", "business");
  newOption2.innerText = "Business";

  const newOption3 = document.createElement("option");
  newOption3.setAttribute("value", "office");
  newOption3.innerText = "Office";

  newSelectGroup.append(newOption1, newOption2, newOption3);
  newSelectFormGroupDiv.append(newInputLabel);
  newSelectFormGroupDiv.append(newSelectGroup);
  newPhysicalAddressWrapperDiv.append(newSelectFormGroupDiv);

  // add to DOM
  allPhysicalAddressesDiv.append(newPhysicalAddressWrapperDiv);
}

function displayContactDetails(event) {
  const contact = addressBook.findContact(event.target.id);
  document.querySelector("#first-name").innerText = contact.firstName;
  document.querySelector("#last-name").innerText = contact.lastName;
  document.querySelector("#phone-number").innerText = contact.phoneNumber;
  const emailAddressesList = document.getElementById("email-addresses-list");
  contact.addresses.emailAddresses.forEach(function(address) {
    const li = document.createElement("li");
    li.innerText = address.addressName + " (" + address.addressType + ")";
    emailAddressesList.append(li);
  });
  const physicalAddressesList = document.getElementById("physical-addresses-list");
  contact.addresses.physicalAddresses.forEach(function(address) {
    const li = document.createElement("li");
    li.innerText = address.addressName + " (" + address.addressType + ")"
    physicalAddressesList.append(li);
  });
  document.querySelector("button.delete").setAttribute("id", contact.id);
  document.querySelector("div#contact-details").removeAttribute("class");
}

function getEmailAddresses() {
  let emailAddresses = document.querySelectorAll(".email-address");
  let emailAddressesArray = [];

  emailAddresses.forEach(function(element) {
    const emailAddressValue = element.children[0].children[1].value;
    const emailAddressType = element.children[1].children[1].value;
    emailAddressesArray.push(new Address(emailAddressValue, emailAddressType, "email"));
  });
  return emailAddressesArray;
}

function getPhysicalAddresses() {
  let physicalAddresses = document.querySelectorAll(".physical-address");
  let physicalAddressesArray = [];

  physicalAddresses.forEach(function(element) {
    const physicalAddressValue = element.children[0].children[1].value;
    const physicalAddressType = element.children[1].children[1].value;
    physicalAddressesArray.push(new Address(physicalAddressValue, physicalAddressType, "physical"));
  });
  return physicalAddressesArray;
}

// create new function to get physical addresses from DOM
// loop through returned addresses and add to contact
// update displayContactDetails to show each address
// get the addressList from DOM
// append list item for each address

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
  getEmailAddresses().forEach(function(address) {
    newContact.addAddress(address);
  });
  getPhysicalAddresses().forEach(function(address) {
    newContact.addAddress(address);
  })
  addressBook.addContact(newContact);
  listContacts(addressBook);
  document.querySelector("input#new-first-name").value = null;
  document.querySelector("input#new-last-name").value = null;
  document.querySelector("input#new-phone-number").value = null;
  document.querySelector("input#new-email-address").value = null;
  document.querySelector("input#new-physical-address").value = null;
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
  document.querySelector("button#new-email-button").addEventListener("click", addNewEmailFieldToForm);
  document.querySelector("button#new-physical-address-button").addEventListener("click", addNewPhysicalAddressFieldToForm);
});