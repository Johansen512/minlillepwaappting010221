/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import kode from "../img/at.jpg"

const Page = () => {
    return (
<div>
        <h2>Dette er undersiden</h2>

        <img src={kode} alt="tu" />
        
        </div>     );
}
 
export default Page;