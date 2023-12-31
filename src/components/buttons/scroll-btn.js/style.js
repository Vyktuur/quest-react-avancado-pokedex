import styled from "styled-components";

export const Button = styled.button`
  background-color: #feca1b;
  border: none;    
  padding: 10px
  text-align: center;
  border-radius: 25px;
  margin: 15px auto;
  cursor: pointer;
  height: 30px; 
  width: 150px;
  font-size: 1em;
  font-weight: bold;
  transition: all 0.3s ease-in-out 0s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  &:hover{
    transform: translateY(-3px);
  }
`
