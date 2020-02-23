import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import TabsBar from './components/TabsBar';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Assistant:400,700&display=swap');

  // minimal CSS reset
  *,
  *:before,
  *:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: 'Assistant', sans-serif;
  }

  html {
  box-sizing: border-box;
  font-size: 62.5%;
  }

  body {
  font-size: 1.6rem;
  max-width: 1440px;
  }

  li {
    list-style: none;
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <TabsBar />
      </Fragment>
    );
  }
}

export default App;
