import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

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

class TabsBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'All'
    };
  }

  tabSelectHandler = (tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    return (
      <Fragment>
        <LanguageBar
          selectedTab={this.state.selectedTab}
          onTabSelect={this.tabSelectHandler}
        />
      </Fragment>
    );
  }
}

export default TabsBar;
