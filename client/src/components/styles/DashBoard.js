import styled from "styled-components";

export const NavMenu = styled.div`
  background-color: lightblue;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2em;
`;

export const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0em 1em;
`;

export const RowCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const Paragraph = styled.p`
  font-size: 1em;
`;



export const CarCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 3px white;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 60%;
`;

export const ImgCar = styled.img`
  width: 100%;
  height: 100%;
  background-color: #C0C0C8;
  padding: 1em;
`;

export const Button = styled.button`
  font-size: 1.5em;
  border: solid 2px;
  padding: 0em 0.5em;
  border-radius: 3px;

  transition-duration: 0.4s;
  color: white;
  background-color: black;
  &:hover {
    background-color: white;
    color: black;
    border: solid 2px;
    padding: 0em 0.5em;
    border-radius: 3px;
  }
`;
export const DBackGround = styled.div`
  background-color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftHalf = styled.div`
display: flex;
flex-direction: column;
background-color: #C0C0C8;
flex: 50%;
height: 100%;
`

export const RightHalf = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
background-color: white;
  flex: 50%;
`
