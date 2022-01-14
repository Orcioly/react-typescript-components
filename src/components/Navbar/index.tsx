import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Span,
} from './NavbarElements';

import logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <Bars />
        <Span>Seja bem vindo(a)!</Span>
        <NavMenu>
          <NavLink to="/contact-us">Fale conosco</NavLink>
          <NavLink to="/about">Quem somos?</NavLink>
          <NavLink to="/carousel">Carousel</NavLink>
          <NavLink to="/register">Entre ou cadastre-se</NavLink>
          {/* 2nd Nav */}
          {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
