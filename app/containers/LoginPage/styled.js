import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 180px);
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 5px;
  padding-left: 5px;
  height: 30px;
  width: 50%;
  max-width: 400px;
`;
