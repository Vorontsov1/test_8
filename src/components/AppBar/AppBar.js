import { Navigation } from '../Navigation/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
// import { useAuth } from 'hooks';
import { Header } from 'components/AppBar/AppBar.styled';

const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  const isLoggedIn = false;
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
