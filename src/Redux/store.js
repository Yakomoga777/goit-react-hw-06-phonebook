import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactSlise } from './slises/contactSlise';
import { filterSlise } from './slises/filterSlise';

// import { INITIAL_CONTACTS } from '../components/App';

// import rootReducer from './reducers';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactSlise.reducer);

//* Створюємо Slice

// const contactSlise = createSlice({
//   name: 'contacts',
//   initialState: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   reducers: {
//     addContact: (state, action) => {
//       return [...state, action.payload];
//     },
//     removeContac: (state, action) => {
//       const updatedContacts = state.filter(
//         contact => contact.id !== action.payload
//       );
//       console.log(action.payload);
//       console.log(state);
//       return updatedContacts;
//     },
//   },
// });

// const filterSlise = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filteredContacts: (state, action) => {
//       return action.payload;
//     },
//   },
// });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactSlise.reducer);

export const store = configureStore({
  reducer: {
    // Створення кореневого ред"юсера
    contacts: contactSlise.reducer,
    filter: filterSlise.reducer,
  },
});

// export const

export const persistor = persistStore(store);
