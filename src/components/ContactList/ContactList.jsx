import { ContactItem } from 'components/ContactList/ContactItem';
import React from 'react';
import { useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';

export const ContactList = () => {
  const currentContacts = useSelector(state => state.contacts);
  console.log(currentContacts);

  // console.log(currentContacts);
  return (
    <ul>
      {currentContacts.map(item => {
        const { id, name, number } = item;
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            // handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};
