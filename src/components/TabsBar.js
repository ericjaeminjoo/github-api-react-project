import React, { Component } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
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

  &:active,
  &:focus {
    outline: 0;
    border: none;
  }
`;

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
              onClick={() => this.tabSelectHandler(language)}
              style={
                language === this.state.selectedTab
                  ? { color: '#916dd5' }
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
}

export default TabsBar;
