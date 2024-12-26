import axios from 'axios';

export const getContacts = async () => {
  let data = [];
  await axios
    .get('https://65b36193770d43aba479a2f2.mockapi.io/users')
    .then((res) => {
      data = res.data;
    });
  return data;
};

export const getContactDetails = async (contactId) => {
  let data = [];
  await axios
    .get(`https://65b36193770d43aba479a2f2.mockapi.io/users/$(contactId)`)
    .then((res) => {
      data = res.data;
    });
  return data;
};
