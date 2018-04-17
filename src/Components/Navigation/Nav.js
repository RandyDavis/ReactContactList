import React from "react";
import { Navbar } from "react-bootstrap";
import './Navigation.css';

const Navigation = () => (
	<Navbar inverse collapseOnSelect className="Navigation">
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#brand">Hey Contact!</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
	</Navbar>
);



// Upcoming links for new functionality will be added via the Navbar.Collapse
// React-Bootstrap Nav markup shown below

// <Navbar.Collapse>
// 	<Nav pullRight>
// 		<NavItem eventKey={1} href="/blogs">
// 			Link 1
// 		</NavItem>
// 		<NavItem eventKey={1} href="/api/login">
// 			Link 2
// 		</NavItem>
// 		<NavItem eventKey={2} href="/api/register">
// 			Link 3
// 		</NavItem>
// 	</Nav>
// </Navbar.Collapse>

export default Navigation;
