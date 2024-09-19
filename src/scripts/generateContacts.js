import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const newArr = [];
    const contacts = await readContacts();
    for (let i = 0; i < number; i++) {
      newArr.push(createFakeContact());
    }
    const updatedContacts = [...contacts, ...newArr];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
