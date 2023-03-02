import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Username = styled.p`
  padding: 12px;
  font-weight: 500;
  color: #ffffff;
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: inherit;
  color: #003c8f;
  font-family: inherit;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #63a4ff;
    color: #ffffff;
  }
`;
