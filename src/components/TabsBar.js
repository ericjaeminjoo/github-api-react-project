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
  color: inherit;
  margin: 0 10px;
`;

class TabsBar extends Component {
  render() {
    const popularLanguages = [
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
        {popularLanguages.map((language) => (
          <li key={language}>
            <Button>{language}</Button>
          </li>
        ))}
      </List>
    );
  }
}

export default TabsBar;
