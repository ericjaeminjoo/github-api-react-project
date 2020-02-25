import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  padding: 0 30px;
  ul {
    display: flex;
    justify-content: space-between;
    padding-top: 70px;
    font-weight: 600;
    letter-spacing: 0.04rem;
    color: #916dd5;
  }
  a {
    text-decoration: none;
    color: #916dd5;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <ul>
        <li>
          <a href=".">github-api-react-project</a>
        </li>
        <li>
          <a href="https://www.ericjaeminjoo.com" target="_blank">
            learn more
          </a>
        </li>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
