import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js'
import PageContent from './PageContent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <PageContent />
      </div>
    );
  }
}

export default App;
