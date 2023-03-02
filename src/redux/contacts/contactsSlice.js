import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  operation: null,
  error: null,
};

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);
// console.log(...getActionsWithType('fulfilled'));

const handleFetchContactsSuccess = (state, action) => {
  state.items = action.payload;
};

const hahandleddContactsSuccess = (state, action) => {
  state.items.push(action.payload);
};

const handledeleteContactsSuccess = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anyFulfilled = state => {
  state.isLoading = false;
  state.operation = null;
  state.error = null;
};

const anyPending = state => {
  state.isLoading = true;
};

const anyRejected = (state, action) => {
  state.isLoading = false;
  state.operation = null;
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

      .addCase(fetchContacts.pending, state => {
        state.operation = 'fetch';
      })
      .addCase(addContact.pending, state => {
        state.operation = 'add';
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.operation = `${action.meta.arg}`;
      })
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPending)
      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), anyFulfilled)
      .addMatcher(isAnyOf(...getActionsWithType('rejected')), anyRejected);
  },
});

export const contactsReducer = contactsSlise.reducer;
