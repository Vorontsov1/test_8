import { Navigation } from '../Navigation/Navigation';
<<<<<<< HEAD
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';
=======
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import { Header } from 'components/AppBar/AppBar.styled';
>>>>>>> 97c9ad507dca3ac14b1eb18752e914f5335a46cf

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
export default AppBar;
