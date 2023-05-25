import React from 'react';
import { useSelector } from 'react-redux';

export const Filter = ({ onFilterInput, value }) => {
  const currentContacts = useSelector(state => state.contacts);
  console.log(currentContacts);
  // Керований інпут фільтра
  const handleChangeFilter = event => {
    if (event.target.name === 'filter') {
      console.log(event.target.value);
      // setFilter(event.target.value);
    }
  };
  return (
    <input
      type="text"
      name="filter"
      required
      value={value}
      onChange={handleChangeFilter}
    />
  );
};
