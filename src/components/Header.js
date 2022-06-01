// import { useState } from "react";
import { useState } from 'react';
import {
  FaAddressBook,
  FaAddressCard,
  FaDrumstickBite,
  FaHeartbeat
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from 'reactstrap';
import { ReactComponent as DragonLogoText } from '../assets/img/dragonslairlogo.svg';
import DragonLogo from '../assets/img/logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar
      className='navbar'
      id='site-header'
      dark
      sticky='top'
      expand='md'
      color='dark'
    >
      <NavbarBrand href='/' xs='3' md='5' className='ms-5'>
        <div id='BrandLogoContainer'>
          <img src={DragonLogo} id='DragonLogoImg' alt='DragonLogoImg' />
          <div className='svg-container'>
            <DragonLogoText id='DragonLogoText' />
          </div>
        </div>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link' to='/about'>
              <FaAddressCard size='28' className='react-icons px-1' /> About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/products'>
              <FaDrumstickBite size='28' className='react-icons px-1' />
              Products
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/health'>
              <FaHeartbeat size='28' className='react-icons px-1' /> Health
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <FaAddressBook size='24' className='react-icons px-1' /> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
