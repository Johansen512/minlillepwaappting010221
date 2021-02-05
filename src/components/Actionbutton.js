/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../App.css';
import React from 'react';

const Actionbutton = () => {



    const actionstyle = css`
    font-size: 1.3rem;
    width: 8rem;
    height: 5rem;
    border: 8px solid #3a799d;
    background-color: #4c93bc;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius:30%;
    box-shadow: 0.25rem 0.25rem 0.8rem;
    outline: 0;
    
    `;


function badylf (){
    console.log ("det er jo badylf")
    }
    
    
    return ( 
<>
<button onClick={badylf} css={actionstyle}>TRYK HER</button>
</>


     );
}
 
export default Actionbutton;