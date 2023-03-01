import { StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Sign up</StyledNavLink>
      <StyledNavLink to="/login">Sign in</StyledNavLink>
    </div>
  );
};

export default AuthNav;
