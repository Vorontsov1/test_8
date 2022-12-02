import Container from '@mui/material/Container';

import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <Container fixed sx={{ width: '768px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
};

export default Layout;
