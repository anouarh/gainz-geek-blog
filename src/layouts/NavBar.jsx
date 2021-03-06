import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/banner.png'

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.red};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
    </StyledLink>
    <Nav>
      <Link to="/">Accueil</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/a-propos">À propos de nous</Link>
      <Link to="/contactez-nous">Contactez-nous</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
