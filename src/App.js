import React from "react";
import {NotificationContainer} from "react-notifications";
// Styles
import { GlobalStyle } from "./GlobalStyle";
import 'react-notifications/lib/notifications.css';
// Component 
import Header from "./components/Header/Header";
import Home from "./Home";

const App = () => (
  <>
    <Header/>
    <Home/>
    <GlobalStyle/>
    <NotificationContainer/>
  </>
)

export default App;
