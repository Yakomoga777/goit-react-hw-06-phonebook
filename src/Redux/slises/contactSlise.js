import { configureStore, createSlice } from '@reduxjs/toolkit';

// export const contactSlise = createSlice({
//   name: 'contacts',
//   initialState: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   reducers: {
//     addContact(state, action) {
//       return [...state, action.payload];
//     },
//     removeContac(state, action) {
//       return action.payload;
//     },
//   },
// });

// export const store = configureStore({
//   reducer: {
//     // Створення кореневого ред"юсера
//     contacts: contactSlise.reducer,
//     // filter: filterSlise.reducer,
//   },
// });