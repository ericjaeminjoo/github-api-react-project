import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fetchGitHubRepos from '../api/api';
import { MdStar } from 'react-icons/md';

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 50px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 1.8rem;
  text-decoration: none;
  font-weight: 300;
  margin: 0 10px;
  color: inherit;
  outline: 0;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const RepoCardsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;

  .card {
    margin: 13px 0;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
  }
  .cardCount {
    font-size: 2.2rem;
    font-weight: 300;
    margin: 9px;
  }
  .cardImage {
    width: 150px;
    border-radius: 50%;
  }
  .cardRepoName {
    font-size: 2rem;
    margin: 13px 0 9px 0;
    a {
      text-decoration: none;
      color: #916dd5;
    }
  }
  .cardInfo li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6px 0;
    font-size: 1.6rem;
    font-weight: 300;
    color: #916dd5;

    svg {
      margin-top: -2px;
      font-size: 2.1rem;
    }
  }
  li.cardUserName {
    color: #6f5a7e;
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
            style={
              language === selectedTab
                ? {
                    color: '#916dd5',
                    borderBottom: '1.3px solid #916dd5',
                    fontWeight: 400
                  }
                : null
            }
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

const GibHubReposCards = ({ gitHubRepos }) => {
  return (
    <RepoCardsContainer>
      {gitHubRepos.map((gitHubRepo, index) => {
        const { name, owner, html_url, stargazers_count } = gitHubRepo;
        const { login, avatar_url } = owner;

        return (
          <li className="card" key={html_url}>
            <h4 className="cardCount">#{index + 1}</h4>
            <img
              className="cardImage"
              src={avatar_url}
              alt={`${login}'s avatar photo`}
            ></img>
            <h2 className="cardRepoName">
              <a href={html_url}>{name}</a>
            </h2>
            <ul className="cardInfo">
              <li className="cardUserName">@{login}</li>
              <li>
                <MdStar />
                {stargazers_count.toLocaleString()} stars
              </li>
            </ul>
          </li>
        );
      })}
    </RepoCardsContainer>
  );
};

GibHubReposCards.propType = {
  gitHubRepos: PropTypes.array.isRequired
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
          <GibHubReposCards gitHubRepos={gitHubRepos[selectedTab]} />
        )}
      </Fragment>
    );
  }
}

export default TabsBar;
