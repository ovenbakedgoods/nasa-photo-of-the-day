import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const TitleDiv = styled.div
    `
color: ghostwhite;
text-align: center;
`;
export default function ShowTitle(props) {
    //console.log(props.title);

    return (
        <TitleDiv className="Title">
            <h1>{props.title}</h1>
        </TitleDiv>
    );
}