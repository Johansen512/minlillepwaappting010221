/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Link } from "@reach/router";
import React from 'react';

const Navbar = () => {

    const navStyle = css`
    display: flex;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color:#0089d1;
    font-size: calc(1rem + 2vmin);
    height: 4rem;
    a{
        color: white;
        text-decoration: none;
        padding: 0.4rem;
      }
    
    `;


    return (
    <nav css={navStyle} >

    <Link to="/"> Forside </Link>  
    <Link to="/Page"> Side </Link>  
    <Link to="/Anotherpage"> En anden side </Link>  
    
    </nav>
    
    );
}
 
export default Navbar;