import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

import { INITIAL_CONTACTS } from '../components/App';
// export const contactsInitialState = {
//   contacts: [
//     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//     { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//     { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// //Створюємо екшн
// export const increment = createAction('myCount/increment');
// export const decrement = createAction('myCount/decrement');
// // 100 - це payload
// console.log(increment(100));
// console.log(decrement(100));

// const myReduser = createReducer(20, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// export const store = configureStore({
//   reducer: {
//     myCount: myReduser,
//   },
// });

//* СПОСІБ через createSlice

// const myValueSlice = createSlice({
//   // Назва значення екшена
//   name: 'myCount',
//   // Початковий стан нашого значення
//   initialState: 10,

//   reducers: {
//     increment(state, action) {
//       console.log(action);

//       return state + action.payload;
//     },
//     decrement(state, action) {
//       console.log(action);

//       return state - action.payload;
//     },
//   },
// });
// console.log(myValueSlice);

// export const store = configureStore({
//   reducer: {
//     myCount: myValueSlice.reducer,
//   },
// });

// export const { increment, decrement } = myValueSlice.actions;

//* Створюємо Slice

const contactSlise = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    removeContac(state, action) {
      return action.payload;
    },
  },
});

const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts(state, action) {
      console.log(state);
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    // Створення кореневого ред"юсера
    contacts: contactSlise.reducer,
    filter: filterSlise.reducer,
  },
});

// export const
//Дуструктуризація екшенів
export const { addContact, removeContac } = contactSlise.actions;
export const { filteredContacts } = filterSlise.actions;
