import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  // NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" className='text-white'>My mini mart</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/cart" className='text-white'>Create cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/categories" className='text-white'>Categories</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className='text-white'>
                more
              </DropdownToggle>
              <DropdownMenu right className='text-white bg-dark'>
                <DropdownItem href='/signup' className='text-white'>
                  Signup
                </DropdownItem>
                <DropdownItem className='text-white'>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className='text-white'>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className='ml-lg-5'>
              <Input type='search' />
            </NavItem>
          </Nav>
          <NavLink href='/login' className='text-white'>Login</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;