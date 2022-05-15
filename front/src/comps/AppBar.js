import React from 'react'

import {Collapse, Navbar, NavbarBrand, Nav, NavItem, Container} from 'reactstrap'

import Auth from './Auth'

export const AppBar =()=> {
	return(<>
		    <Navbar color="dark" dark-expand="sm" className="mb-3">
		     <Container>
		      <NavbarBrand href="/">List of Goods</NavbarBrand>
              <Auth />
		      </Container>
		     </Navbar>
		  </>)
}