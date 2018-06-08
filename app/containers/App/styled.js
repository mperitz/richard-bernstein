import styled from 'styled-components';

export const AppContainer = styled.div`
  opacity: ${({ modalOpen }) => modalOpen ? '0.5' : '1'};
`;

export const ModalText = styled.p`
  margin: 0;
  font-family: 'Montserrat';
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: calc(50% - 100px);
  top: calc(50% - 100px);
`;

export const SpinnerImg = styled.img`
  height: 20px;
  width: 20px;
`;
