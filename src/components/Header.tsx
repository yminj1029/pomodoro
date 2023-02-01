import React from 'react';
import tomato from '../assets/images/tomato.png'
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Tomato = styled.img`
    width: 40%;
    padding: 20px;
`;
const StartBtn = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
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
                START
            </StartBtn>
        </HeaderDiv>
    );
};

export default Header;