import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // minimal CSS reset
  *,
  *:before,
  *:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  }

  html {
  box-sizing: border-box;
  font-size: 62.5%;
  }

  body {
  font-size: 1.6rem;
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div>Hello, World...again!</div>;
      </Fragment>
    );
  }
}

export default App;
