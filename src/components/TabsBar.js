import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fetchGitHubRepos from '../api/api';

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin: 10px auto;
  padding: 50px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 1.8rem;
  text-decoration: none;
  font-weight: 700;
  margin: 0 10px;
  color: inherit;
  outline: 0;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

function LanguageBar({ selectedTab, onTabSelect }) {
  const languageTabs = [
    'All',
    'JavaScript',
    'Python',
    'Ruby',
    'Java',
    'PHP',
    'TypeScript',
    'CSS'
  ];

  return (
    <List>
      {languageTabs.map((language) => (
        <li key={language}>
          <Button
            onClick={() => onTabSelect(language)}
            style={language === selectedTab ? { color: '#916dd5' } : null}
          >
            {language}
          </Button>
        </li>
      ))}
    </List>
  );
}

LanguageBar.propTypes = {
  onTabSelect: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
};

class TabsBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'All',
      gitHubRepos: {},
      error: null
    };
  }

  componentDidMount() {
    this.tabSelectHandler(this.state.selectedTab);
  }

  tabSelectHandler = (tab) => {
    this.setState({
      selectedTab: tab,
      error: null
    });

    if (!this.state.gitHubRepos[tab]) {
      fetchGitHubRepos(tab)
        .then((data) => {
          this.setState({
            gitHubRepos: {
              ...this.state.gitHubRepos,
              [tab]: data
            }
          });
        })
        .catch((error) => {
          console.log(
            `Error lifted from attempt on fetching GitHub Repositories - ${error}`
          );
          this.setState({
            error: 'Error lifted from attempt on fetching GitHub Repositories!'
          });
        });
    }
  };

  loadingGitHubRepos = () => {
    const { selectedTab, gitHubRepos, error } = this.state;

    return !gitHubRepos[selectedTab] && error === null;
  };

  render() {
    const { selectedTab, error, gitHubRepos } = this.state;

    return (
      <Fragment>
        <LanguageBar
          selectedTab={selectedTab}
          onTabSelect={this.tabSelectHandler}
        />
        {this.loadingGitHubRepos() && <p>LOADING PAGE</p>}
        {error && <p>{error}</p>}
        {gitHubRepos[selectedTab] && (
          <pre>{JSON.stringify(gitHubRepos[selectedTab], null, 2)}</pre>
        )}
      </Fragment>
    );
  }
}

export default TabsBar;
