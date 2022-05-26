// import { useState } from "react";
import { NavLink } from 'react-router-dom';
import DragonLogo from '../assets/img/DragonLairLogos.png';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className='navbar' dark sticky='top' expand='md' color='dark'>
      <NavbarBrand href='/' className='ms-5'>
        <img
          src={DragonLogo}
          alt='Dragons Lair Logo'
          className='rounded-pill img-fluid'
        />
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/'>
              <i className='fa fa-home fa-lg' aria-hidden='true' /> Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/about'>
              <i className='fa fa-address-card fa-lg' /> About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/products'>
              <i className='fa fa-cutlery fa-lg' /> Product
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/health'>
              <i className='fa fa-heartbeat fa-lg' /> Health
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/vendor'>
              <i className='fa fa-shopping-bag fa-lg' /> Vendor
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <i className='fa fa-address-book' /> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
