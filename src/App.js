import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import OneSignal from "react-onesignal";
import Home from "./components/Home";
import Page from "./components/Page";
import Notfound from "./components/Notfound";
import PWAPrompt from 'react-ios-pwa-prompt'
OneSignal.initialize('bdd3a802-1273-48f5-96cb-ea87cd7f691d', {
  safari_web_id:"web.onesignal.auto.1947bcbb-3df5-45a5-b464-0be0e15f4a2c"
})

function App() {
  return (
    <div> <Router>
    <Home path= "/" />
    <Page path="/page"/>
    <Notfound default/>

    </Router>

<PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false}/></div>
  );
}

export default App;
