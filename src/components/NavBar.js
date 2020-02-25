import React from 'react';
import styled from 'styled-components';
import { GoOctoface } from 'react-icons/go';

const NavBarContainer = styled.nav`
  max-width: 1500px;
  padding: 0 50px;
  margin: 0 auto;
  .logo {
    display: flex;
    align-items: center;
    svg {
      margin: 5px;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
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
          <a className="logo" href=".">
            <GoOctoface />
            github-api-react-project
          </a>
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
