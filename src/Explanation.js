import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const ExplanationDiv = styled.div
    `
color: white;
text-align: center;
display:inline-block;
position:relative;
width: 60%;
line-height: 32px;
border: 9px solid red
`;
export default function ShowExplanation(props) {
    //console.log(props.explanation);

    return (
        <ExplanationDiv className="Explanation">
            <p>{props.explanation}</p>
        </ExplanationDiv>
    );
}