/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../App.css';
import React from 'react';
import imgsrc from "../img/dd.png"

const Fourthpage = () => {

    const PageStyling = css`
     display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 2rem;
    background-color: #332e92;
    color: white;
    
    
    `;




    return (
<div css={PageStyling}>
        <h2>Dette er en ny hemmelig side</h2>
        <p>Hvem er Dupont ... og hvem er Dupond?</p>

        <img src={imgsrc} alt="tut" />
        
        </div>     );
}
 
export default Fourthpage;