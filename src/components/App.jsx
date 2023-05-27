import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { addContact } from 'Redux/store';
import { useDispatch } from 'react-redux';

const theme = {};

export const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  // const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? INITIAL_CONTACTS
  // );
  // const [filter, setFilter] = useState('');

  // // Керований інпут фільтра
  // const handleChangeFilter = event => {
  //   if (event.target.name === 'filter') {
  //     setFilter(event.target.value);
  //   }
  // };

  // // Функція фільтрації контактів
  // const filtersContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   } else if (filter) {
  //     return contacts.filter(item =>
  //       item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  //     );
  //   }
  // };

  // //Метод видалення
  // const handleDelete = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // //запис в localStorage
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <h1>Phonebook</h1>
      <ContactForm
        btn="Add contact"
        // handleSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      <Filter
      // value={filter}
      // onFilterInput={handleChangeFilter}
      />
      <ContactList
      // items={filtersContacts()}
      // handleDelete={handleDelete}
      />
    </ThemeProvider>
  );
};
