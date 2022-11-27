import { useDispatch, useSelector } from 'react-redux';
import { selectContactsCount } from 'redux/selectors';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { upFirstLetter } from 'utils/index';
import { Wrapper, Username, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  const total = useSelector(selectContactsCount);

  return (
    <Wrapper>
      <Username>
        {upFirstLetter(user.name)} : {total}
      </Username>

      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
