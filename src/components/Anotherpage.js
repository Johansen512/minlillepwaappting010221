/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../App.css';
import React from 'react';
import kode from "../img/rainy.png"

const Anotherpage = () => {

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
        <h2>Dette er en anden side</h2>
        <p>Regnvejr er tegneserievejr</p>

        <img src={kode} alt="tu" />
        
        </div>     );
}
 
export default Anotherpage;