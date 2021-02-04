import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import OneSignal from "react-onesignal";
import Home from "./components/Home";
import Page from "./components/Page";
import Navbar from "./components/Navbar"
import Notfound from "./components/Notfound";
import PWAPrompt from 'react-ios-pwa-prompt'
import Anotherpage from './components/Anotherpage';
OneSignal.initialize('91c782cf-3151-4837-a221-a05ac166070f', {
  safari_web_id:"web.onesignal.auto.5d6ab6d2-4d0b-4ad8-b336-7f8ff3aff850"
})

function App() {
  return (
    <>
    <Navbar />
    
      
    <Router>
    <Home path= "/" />
    <Page path="/Page"/>
    <Anotherpage path="/Anotherpage"/>
    <Notfound default/>

    </Router>

<PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false}/>
  
</>
  );
}

export default App;
