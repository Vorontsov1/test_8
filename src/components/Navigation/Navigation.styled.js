import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
<<<<<<< HEAD
  font-weight: 500;
  color: #003c8f;
=======

  font-weight: 500;
  color: #003c8f;

>>>>>>> 97c9ad507dca3ac14b1eb18752e914f5335a46cf
  &:hover,
  &:focus {
    color: #1565c0;
  }
<<<<<<< HEAD
=======

>>>>>>> 97c9ad507dca3ac14b1eb18752e914f5335a46cf
  &.active {
    color: #ffffff;
  }
`;
