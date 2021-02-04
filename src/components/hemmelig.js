/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../App.css';
import React from 'react';
import kode from "../img/dd.png"

const hemmelig = () => {

    const PageStyling = css`
     display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    background-color: #332e92;
    color: white;
    
    
    `;




    return (
<div css={PageStyling}>
        <h2>Den hemmelige side ... Sssshhhh</h2>
        <p>Hvem er Dupond ... og hvem er Dupont?</p>
        <p>Nu er det næstsidste gang jeg retter det her lort!</p>
        
        <img src={kode} alt="tu" />
        
        </div>     );
}
 
export default hemmelig;