import { configureStore, createSlice } from '@reduxjs/toolkit';

// export const filterSlise = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filteredContacts(state, action) {
//       console.log(state);
//       console.log(action.payload);
//       return action.payload;
//     },
//   },
// });
// export const store = configureStore({
//   reducer: {
//     // Створення кореневого ред"юсера
//     // contacts: contactSlise.reducer,
//     filter: filterSlise.reducer,
//   },
// });

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts: (state, action) => {
      return action.payload;
    },
  },
});
