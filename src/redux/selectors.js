// selectors.js - файл объявления функций-селекторов

import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsLoadingAddContact = state =>
  state.contacts.isLoadingAddContact;
export const selectIsLoadingDeleteContact = state =>
  state.contacts.isLoadingDeleteContact;
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

// export const selectTaskCount = createSelector([selectTasks], tasks => {
//   console.log('Calculating task count');

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// });

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
