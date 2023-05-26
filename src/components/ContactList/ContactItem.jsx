import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContac } from 'Redux/store';
import { StiledItem } from './ContactItem.styled';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const currentContacts = useSelector(state => state.contacts);
  // console.log(currentContacts);

  const handleDelete = id => {
    const updatedContacts = currentContacts.filter(
      contact => contact.id !== id
    );

    dispatch(removeContac(updatedContacts));

    return updatedContacts;
  };
  return (
    <>
      <StiledItem key={id}>
        <p>
          {name}: {number}
        </p>
        <div></div>
        <button
          type="button"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </StiledItem>
    </>
  );
}
