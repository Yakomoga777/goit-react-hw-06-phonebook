import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'Redux/slises/filterSlise';

export const Filter = ({ onFilterInput, value }) => {
  const dispatch = useDispatch();

  // const contacts = useSelector(state => state.contacts);

  // console.log('contacts -', contacts);

  // Керований інпут фільтра
  const handleChangeFilter = event => {
    if (event.target.name === 'filter') {
      const filterInputValue = event.target.value;
      dispatch(filteredContacts(filterInputValue));
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
