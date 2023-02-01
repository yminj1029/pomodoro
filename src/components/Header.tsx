import React from 'react';
import tomato from '../assets/images/pomodoro-image.png'
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Tomato = styled.img`
    width: 50%;
`;
const StartBtn = styled.button`
    width: 150px;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
    border: none;
    color: white;
    background-color: green;
    :hover{
        background-color: greenyellow;
        color: red;
    }
`;

const Header = () => {

    const startTimer = () =>{
        console.log("start");
    }
    return (
        <HeaderDiv>
            <Tomato src={tomato} />
            <StartBtn onClick={startTimer}>
                start
            </StartBtn>
        </HeaderDiv>
    );
};

export default Header;