import React from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
    width: 60%;
    padding: 30px;
`
const TimerWrapper = styled.div`
    height: 30px;
    line-height :20px;
    background: green;
    position :relative;
    border-radius: 4px;
    border: 5px solid green;
`
const TimerBar = styled.div`
    width: 50%;
    height: 30px;
    background-color: greenyellow;
    position: absolute;
    border-radius: 4px;
`
const TimerText = styled.div`
    padding: 30px;
    color: grey;
    font-size: 30px;
`
const Timer = () => {
    return (
        <TimerContainer>
            <TimerWrapper>
                <TimerBar></TimerBar>
            </TimerWrapper>
            <TimerText>
                00:00:00
            </TimerText>
        </TimerContainer>
    );
};

export default Timer;