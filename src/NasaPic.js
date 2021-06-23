import React, { useState, useEffect } from 'react'


export default function ShowImage(props) {
    //console.log(props.url);

    return (
        <div className="Image">
            <img alt = "daily picture" src = {props.url}/>
        </div>
    );
}