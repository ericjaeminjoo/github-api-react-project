import React from 'react';
import { css } from '@emotion/core';
// Another way to import. This is recommended to reduce bundle size
import SyncLoader from 'react-spinners/SyncLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class Fetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <SyncLoader
          css={override}
          size={13}
          color={'#916dd5'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Fetching;
