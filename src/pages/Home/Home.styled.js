import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh-50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  svg {
    color: #5e92f3;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #5e92f3;
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  color: #5e92f3;
`;
