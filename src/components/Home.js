/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '../logo.svg';
import '../App.css';
import React from 'react';



const Home = () => {

const HomeStyle= css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color:#332e92;
  color: white;
  margin: 5rem;
  padding: 1rem;
`;

    return ( 


        <div className="App">
          
      <header className="App-header">
      
       
      </header>
<section css={HomeStyle}>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Velkommen til Fantasks mobile abonnements-service
        </p>

        </section>
    </div>
     );
}
 
export default Home;