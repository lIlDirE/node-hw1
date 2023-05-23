const { nanoid } = require("nanoid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db", "contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const result = await fs.readFile(contactsPath, "utf-8"); //add to const result the contact.json info
    console.log(result);
    return;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const result = await fs.readFile(contactsPath, "utf-8");  //add to const result the contact.json info
    const contacts = JSON.parse(result); // result from string to obj
    const findName = contacts.find((el) => el.id === contactId); //find contactId in the result object
    console.log(findName);
    return;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
	try {
		const result = await fs.readFile(contactsPath, "utf-8"); //add to const result the contact.json info
		const contacts = JSON.parse(result).filter(e => e.id !== contactId); // result from string to obj and filter this object by contactId info
		await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2)); // write contacts string result to contactsPath file 
		console.log("Contact removed successfully.");
		return;
	} catch (error) {
		console.log(error);
	}
  fs.writeFile(filename, data, [options]);
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf-8"); //add to const result the contact.json info
  const newContact = { id: nanoid(), name, email, phone }; //create newContact obj with the id, name, email, phone params
  const contacts = JSON.parse(data); // result from string to obj

  contacts.push(newContact); //push newContact to contacts 
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2)); // write contacts string result to contactsPath file 

  console.log("Contact added successfully.");
}

module.exports = { getContactById, removeContact, addContact, listContacts };
