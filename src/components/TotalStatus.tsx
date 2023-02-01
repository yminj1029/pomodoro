import React from 'react';
import styled from 'styled-components';

const TotalContents = styled.div`
    color: grey;
    font-size: 25px;
    font-weight: bold;
`
const TotalTry = styled.span`
    display: inline-block;
    width: 100px;
    border-right: 3px grey solid;
`

const TotalAttentionTime = styled.span`
    display: inline-block;
    width: 130px;
    border-right:3px grey solid;
`

const TotalRestTime = styled.span`
    display: inline-block;
    width: 130px;
`

const TotalStatus = () => {
    return (
        <TotalContents>
            <TotalTry>총 0 회</TotalTry> 
            <TotalAttentionTime>00:00:00</TotalAttentionTime> 
            <TotalRestTime>00:00:00</TotalRestTime>
        </TotalContents>
    );
};

export default TotalStatus;