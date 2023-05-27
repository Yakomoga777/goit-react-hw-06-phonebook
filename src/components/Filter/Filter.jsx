import React from 'react';
import { filteredContacts } from '../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = ({ onFilterInput, value }) => {
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.filter);

  const contacts = useSelector(state => state.contacts);
  // const filterValue = useSelector(state => state.filter);
  // console.log('filterContacts - ', filterContacts);
  console.log('contacts -', contacts);
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
