import React, { useState, useEffect } from 'react'


export default function ShowTitle(props) {
    //console.log(props.title);

    return (
        <div className="Title">
            <h1>{props.title}</h1>
        </div>
    );
}