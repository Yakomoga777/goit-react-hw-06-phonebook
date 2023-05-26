import { ContactItem } from 'components/ContactList/ContactItem';
import React from 'react';
import { useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const changedList = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );
  console.log('changedList -', changedList);

  // console.log(changedList);
  // console.log('filterValue - ', filterValue);

  // console.log(currentContacts);
  return (
    <ul>
      {changedList.map(item => {
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
