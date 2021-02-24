import React from 'react';
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";
import {
    ApolloClient,
    ApolloProvider,
      } from "@apollo/client";



import './App.css';



const App = () => {
  return (
    <div className="App">
      <LaunchList />
      <LaunchProfile />
    </div>
  );
};

export default App;
