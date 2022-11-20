import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// const extraActions = [register, logIn, logOut, refreshUser];
// const getActionsWithType = type =>
//   extraActions.map(extraAction => extraAction[type]);
// console.log(getActionsWithType('fulfilled'));

const handleRegisterSuccess = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const hahandlelogInSuccess = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const hahandlelogOutSuccess = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const hahandlerefreshUserSuccess = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  // state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder

      //fulfilled
      .addCase(register.fulfilled, handleRegisterSuccess)
      .addCase(logIn.fulfilled, hahandlelogInSuccess)
      .addCase(logOut.fulfilled, hahandlelogOutSuccess)
      .addCase(refreshUser.fulfilled, hahandlerefreshUserSuccess)

      .addMatcher(
        isAnyOf(
          register.pending,
          logIn.pending,
          register.rejected,
          logIn.rejected
        ),
        state => state
      )

      .addMatcher(
        isAnyOf(
          refreshUser.pending,
          refreshUser.fulfilled,
          refreshUser.rejected
        ),
        state => {
          state.isRefreshing = !state.isRefreshing;
        }
      );
  },
});

export const authReducer = authSlice.reducer;

// .addCase(refreshUser.pending, state => {
//   state.isRefreshing = true;
// })
// .addCase(refreshUser.rejected, state => {
//   state.isRefreshing = false;
// })

// pending
// .addCase(register.pending, state => state)
// .addCase(logIn.pending, state => state)

//rejected
// .addCase(register.rejected, state => state)
// .addCase(logIn.rejected, state => state)
