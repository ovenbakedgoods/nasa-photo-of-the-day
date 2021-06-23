import React, { useState, useEffect } from 'react'


export default function ShowExplanation(props) {
    //console.log(props.explanation);

    return (
        <div className="Explanation">
            <p>{props.explanation}</p>
        </div>
    );
}