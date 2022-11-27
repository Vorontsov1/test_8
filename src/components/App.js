import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Layout from 'components/Layout/Layout';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/'));
const AddContact = lazy(() => import('pages/AddContact/'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container fixed sx={{ width: '920px' }}>
      {isRefreshing ? (
        <Backdrop
          sx={{ color: '#003b8e', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={isRefreshing}
          invisible={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo={'/login'}
                />
              }
            />

            <Route
              path="/newcontact"
              element={
                <PrivateRoute
                  component={<AddContact />}
                  redirectTo={'/login'}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  );
};
