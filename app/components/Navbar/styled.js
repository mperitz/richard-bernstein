import styled from 'styled-components';

export const Navbar = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 80px;
  background: tomato;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 125px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    height: 80px;
  }
`;

export const Header = styled.h1`
  margin: 0;
  display: inline-block;
  font-family: 'Permanent Marker', cursive;
  font-size: 2em;
  cursor: pointer;
`;

export const SubHeader = styled.p`
  margin: 0;
  font-family: 'Permanent Marker';
`;

export const ButtonContainer = styled.div`
  width: 50%;
  text-align: center;
  vertical-align: middle;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Button = styled.div`
  height: 20px;
`;

export const ButtonText = styled.p`
  margin: 0;
  font-family: 'Montserrat';
  cursor: pointer;
`;
