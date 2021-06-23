import React, { useState, useEffect } from 'react'


export default function ShowDate(props)
{
    //console.log(props.date);

    return (
        <div className="Date">
            <h3>Today's Date is {props.date}</h3>
        </div>
    );
}