import styled from 'styled-components'

export const FancyButton = styled.button`
  color: black;
  background: lightgrey;
  border-color: black;
  border-radius: 50px;
  cursor: pointer;
  width: 200px;
  height: 40px;
  font-weight: bold;
  font-family: "Arial", Arial, Sans-serif;
  

  &:hover {
    background: grey;
  }
`

export const FancyInput = styled.input`
  padding: 0px 20px;
  color: ${props => props.inputColor || 'black'};
  background: white;
  border-color: black;
  border-radius: 50px;
  width: 200px;
  height: 35px;
`
export const DeleteButton = styled.button`
  margin: 0px 10px;
  color: black;
  background: white;
  border-color: black;
  border-radius: 5px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  font-weight: bold;
  
  &:hover {
    background: red;
  }
`
