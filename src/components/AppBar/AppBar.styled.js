import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid #5e92f3;
  background-color: #5e92f3;
`;

export const Searchbox = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
`;
