/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import '../App.css';
import { Link } from "@reach/router";
import '../App.css';
import React from 'react';


const Notfound = () => {

    const NfoundStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 2rem;
    background-color: #332e92;
    color: white;
    a{
        color: white;
        text-decoration: none;
        
      }

    `;

    return ( 
<div css={NfoundStyle}>

    <h1>Desværre ... siden kan ikke vises</h1>
    <img src="Sorry.jpg" width="400" height="400" alt="Beklager" />
    <p><Link to="/">Klik her</Link>  for at komme tilbage</p>
</div>

     );
}
 
export default Notfound;