import {
  FaAddressBook,
  FaAddressCard,
  FaDrumstickBite,
  FaHeartbeat
} from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
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

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <Navbar
      className='navbar'
      id='site-header'
      dark
      sticky='top'
      expand='md'
      color='dark'
    >
      <NavbarBrand xs='3' md='5' className='ms-5'>
        <Link to='/'>
          <div id='BrandLogoContainer'>
            <img src={DragonLogo} id='DragonLogoImg' alt='DragonLogoImg' />
            <div className='svg-container'>
              <DragonLogoText id='DragonLogoText' />
            </div>
          </div>
        </Link>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink
              className='nav-link'
              to='/about'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaAddressCard size='28' className='react-icons px-1' /> About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className='nav-link'
              to='/products'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaDrumstickBite size='28' className='react-icons px-1' />
              Products
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className='nav-link'
              to='/health'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaHeartbeat size='28' className='react-icons px-1' /> Health
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className='nav-link'
              to='/contact'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaAddressBook size='24' className='react-icons px-1' /> Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
