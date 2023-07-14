import styled from 'styled-components'

export const LoadButton = styled.button`
    width: 180px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    background-color: #feca1b;
    color: #14213D;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 40px -7px;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`