import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);
// console.log(...getActionsWithType('fulfilled'));

const handleFetchContactsSuccess = (state, action) => {
  state.items = action.payload;
  // console.log(state.items);
};

const hahandleddContactsSuccess = (state, action) => {
  state.items.push(action.payload);
};

const handledeleteContactsSuccess = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
  // console.log(action.payload.id);
};

const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPending = state => {
  state.isLoading = true;
};

const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsSuccess)
      .addCase(addContact.fulfilled, hahandleddContactsSuccess)
      .addCase(deleteContact.fulfilled, handledeleteContactsSuccess)

      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), anyFulfilled)
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPending)
      .addMatcher(isAnyOf(...getActionsWithType('rejected')), anyRejected);
  },
});

export const contactsReducer = contactsSlise.reducer;
