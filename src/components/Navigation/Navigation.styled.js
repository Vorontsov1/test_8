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

  font-weight: 500;
  color: #003c8f;

  &:hover,
  &:focus {
    color: #1565c0;
  }

  &.active {
    color: #ffffff;
  }
`;
