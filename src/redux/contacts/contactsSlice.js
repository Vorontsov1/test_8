import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  isLoadingAddContact: false,
  isLoadingDeleteContact: false,
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
  state.isLoadingAddContact = false;
  state.isLoadingDeleteContact = false;
  state.error = null;
};

// const anyPendingFetchContacts = state => {
//   state.isLoading = true;
// };
// const anyPending = state => {
//   state.isLoading = false;
// };

const anyRejected = (state, action) => {
  state.isLoading = false;
  state.isLoadingAddContact = false;
  state.isLoadingDeleteContact = false;
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
        state.isLoading = true;
      })
      .addCase(addContact.pending, state => {
        state.isLoadingAddContact = true;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoadingDeleteContact = true;
      })

      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), anyFulfilled)
      .addMatcher(isAnyOf(...getActionsWithType('rejected')), anyRejected);
  },
});

export const contactsReducer = contactsSlise.reducer;

//============================================================================
// const contactsSlise = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,

//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.fulfilled, handleFetchContactsSuccess)
//       .addCase(addContact.fulfilled, hahandleddContactsSuccess)
//       .addCase(deleteContact.fulfilled, handledeleteContactsSuccess)

//       .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), anyFulfilled)
//       .addMatcher(isAnyOf(fetchContacts.pending), anyPendingFetchContacts)
//       .addMatcher(
//         isAnyOf(addContact.pending, deleteContact.pending),
//         anyPending
//       )
//       .addMatcher(isAnyOf(...getActionsWithType('rejected')), anyRejected);
//   },
// });
