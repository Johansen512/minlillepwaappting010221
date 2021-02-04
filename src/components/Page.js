/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../App.css';
import React from 'react';
import imgsrc from "../img/wiz.png"

const Page = () => {

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
        <h2>Dette er undersiden</h2>
        <p>Er det her magien sker?</p>

        <img src={imgsrc} alt="tu" />
        
        </div>     );
}
 
export default Page;