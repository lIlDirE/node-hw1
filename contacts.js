const { nanoid } = require("nanoid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db", "contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const result = await fs.readFile(contactsPath, "utf-8");
    console.log(result);
    return;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const result = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(result);
    const findName = contacts.find((el) => el.id === contactId);
    console.log(findName);
    return;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  fs.writeFile(filename, data, [options]);
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf-8");
  const newContact = { id: nanoid(), name, email, phone };
  const contacts = JSON.parse(data);

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  console.log("Contact added successfully.");
}

module.exports = { getContactById, removeContact, addContact, listContacts };
