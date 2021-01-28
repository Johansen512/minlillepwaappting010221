import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import OneSignal from "react-onesignal";
import Home from "./components/Home";
import Page from "./components/Page";

OneSignal.initialize('bdd3a802-1273-48f5-96cb-ea87cd7f691d', {
  safari_web_id:"web.onesignal.auto.1947bcbb-3df5-45a5-b464-0be0e15f4a2c"
})

function App() {
  return (
    <Router>
    <Home path= "/" />
    <Page path="/page"/>
    </Router>
  );
}

export default App;
