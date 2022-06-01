// import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { ReactComponent as DragonLogoText } from '../assets/img/dragonslairlogo.svg';
import DragonLogo from '../assets/img/logo.jpg';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { useState } from 'react';
import {
  FaDrumstickBite,
  FaHome,
  FaAddressCard,
  FaHeartbeat,
  FaAddressBook,
  FaFacebookF,
  FaPhone,
  FaRegEnvelope
} from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className='navbar' dark sticky='top' expand='md' color='dark'>
      <NavbarBrand href='/' xs='3' md='5' className='ms-5'>
        <div id='BrandLogoContainer'>
          <img src={DragonLogo} id='DragonLogoImg' alt='DragonLogoImg' />
          <div class='svg-container'>
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
