// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { Wrapper, Username } from 'components/UserMenu/UserMenu.styled';

const UserMenu = () => {
  // const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <button type="button">Logout</button>
    </Wrapper>
  );
};

export default UserMenu;
