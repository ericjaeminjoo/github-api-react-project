import React, { Component } from 'react';
import GitHubReposSection from './components/GitHubReposSection';
import GlobalStyle from './components/GlobalStyle';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <NavBar />
        <GitHubReposSection />
      </React.Fragment>
    );
  }
}

export default App;
