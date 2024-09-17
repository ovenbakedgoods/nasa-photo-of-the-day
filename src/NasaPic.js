import React, { useState, useEffect } from 'react'
import styled from 'styled-components';



export default function ShowImage(props) {
    console.log(props.url);

    return (

        <div className="Image">
           < iframe src={props.url} frameBorder='0'
                width='1000'
                height='1000'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video' /> 
                
            
        </div>
    );
}