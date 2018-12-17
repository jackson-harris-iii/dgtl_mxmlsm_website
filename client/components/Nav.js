import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			collapse: !this.state.collapse,
		});
	}

	render() {
		const teal = { backgroundColor: '#4deffe' };
		return (
			<div>
				<Router>
					<Navbar className="white" dark expand="md" scrolling fixed="top">
						<NavbarBrand href="/">
							<strong className="black-text">dgtl_mxmlsm</strong>
						</NavbarBrand>
						<NavbarToggler onClick={this.onClick} />
						<Collapse isOpen={this.state.collapse} navbar>
							<NavbarNav right>
								<NavItem active>
                                    <NavLink className="black-text" to="#">Home</NavLink>
								</NavItem>
								<NavItem>
                                    <NavLink className="black-text" to="#">Bootcamp</NavLink>
								</NavItem>
								<NavItem>
                                    <NavLink className="black-text" to="#">Blog</NavLink>
								</NavItem>
								<NavItem>
                                    <NavLink className="black-text" to="#">Contact</NavLink>
								</NavItem>
								<NavItem>
                                    <NavLink className="black-text" to="#">
										<Fa icon="facebook" />
									</NavLink>
								</NavItem>
								<NavItem>
                                    <NavLink className="black-text" to="#">
										<Fa icon="twitter" />
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to="#">
										<Fa icon="instagram" />
									</NavLink>
								</NavItem>
							</NavbarNav>
						</Collapse>
					</Navbar>
				</Router>
			</div>
		);
	}
}

export default Nav;
