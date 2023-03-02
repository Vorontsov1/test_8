import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectOperation = state => state.contacts.operation;
export const selectError = state => state.contacts.error;
const selectValueFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, valueFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(valueFilter.toLowerCase())
    );
  }
);

export const selectContactsCount = createSelector(
  [selectContacts],
  contacts => {
    return contacts.length;
  }
);
