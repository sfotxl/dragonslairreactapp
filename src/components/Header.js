import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import DragonLogo from "../assets/img/logo.jpg";
import { Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

const Header = () => {
 
  return (
    <Navbar sticky='top'>
      <NavbarBrand href='/'>
        <img src={DragonLogo} alt='Dragons Lair Logo'/>
      </NavbarBrand>
      <Nav>
          <NavLink to='/products'>
            Products
          </NavLink> 
          <NavLink to='/'>
            <i className='fa fa-dragon fa-lg'/>Home
          </NavLink>
          <NavLink to='/contact'>
              Contact
          </NavLink>
      </Nav>
    </Navbar>
    // <Navbar sticky="top" color="primary">
    //   <NavbarBrand href="/">
    //     <img src={DragonLogo} alt="Dragons Lair logo" />
    //     <h1>Dragons Lair Smoked Fine Goods</h1>
    //   </NavbarBrand>
    //     <Nav navbar>
    //       <NavItem>
    //         <NavLink to="/">
    //           <i className="fa fa-dragon fa-lg" /> Home
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink className="nav-link" to="/products">
    //           <i className="fa fa-drumstick-bite fa-lg" /> Products
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink className="nav-link" to="/health">
    //           <i className="fa fa-briefcase-medical fa-lg" />
    //           Health
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink className="nav-link" to="/about">
    //           <i className="fa fa-person-hiking fa-lg" />
    //           About
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink className="nav-link" to="/contact">
    //           <i className="fa fa-address-card fa-lg" />
    //           Contact
    //         </NavLink>
    //       </NavItem>
    //     </Nav>
    // </Navbar>
  
  );
};

export default Header;