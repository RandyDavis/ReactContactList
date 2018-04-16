import React, { Component }  from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap' ;

class Navigation extends Component {
    render() {
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">Hey Contact!</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/blogs">
                            Link 1
                        </NavItem>
                        <NavItem eventKey={1} href="/api/login">
                            Link 2
                        </NavItem>
                        <NavItem eventKey={2} href="/api/register">
                            Link 3
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;