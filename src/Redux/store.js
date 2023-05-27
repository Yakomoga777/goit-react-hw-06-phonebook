import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { INITIAL_CONTACTS } from '../components/App';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactSlise.reducer);

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
    contacts: persistedReducer,
    filter: filterSlise.reducer,
  },
});

// export const
//Дуструктуризація екшенів
export const { addContact, removeContac } = contactSlise.actions;
export const { filteredContacts } = filterSlise.actions;

export let persistor = persistStore(store);
