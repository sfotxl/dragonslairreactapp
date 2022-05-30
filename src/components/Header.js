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
import { FaDrumstickBite } from "react-icons/fa";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className='navbar' dark sticky='top' expand='md' color='dark'>
      <NavbarBrand href='/' xs='3' md='5' className='ms-5'>
        <div id='BrandLogoContainer'>
          <img src={DragonLogo} id='DragonLogoImg' alt="DragonLogoImg" />
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
              <i className='fa fa-address-card fa-lg' /> About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/products'>
              <i className='fa fa-lg'><FaDrumstickBite/></i> Products
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/health'>
              <i className='fa fa-heartbeat fa-lg' /> Health
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/contact'>
              <i className='fa fa-address-book'></i> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
