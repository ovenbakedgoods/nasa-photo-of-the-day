import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const DateDiv = styled.div
`
width: 10%;
background-color: Black;
color: ghostwhite;
text-align: center;
display:inline-block;
position:relative;
`;

export default function ShowDate(props)
{
    console.log(props.date);

    return (
        <DateDiv className="Date">
            <h3>Today's Date is {props.date}</h3>
        </DateDiv>
    );
}