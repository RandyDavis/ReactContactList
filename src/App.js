import React, { Component } from "react";
import Navigation from "./Components/Navigation/Nav";
import Footer from './Components/Footer/footer';
import "./App.css";
import { Grid, Col, Row, Thumbnail, Panel } from "react-bootstrap";

const list = [
	{
		name: {
			first: "FirstName",
			last: "LastName"
		},
		age: 25,
		email: "me@example.com",
		picture: {
			medium: "http://via.placeholder.com/350x150"
		},
		login: {
			username: "loginName"
		},
		gender: "male",
		phone: "555-555-5555"
	},
	{
		name: {
			first: "FirstName",
			last: "LastName"
		},
		age: 28,
		email: "me@example.com",
		picture: {
			medium: "http://via.placeholder.com/350x150"
		},
		login: {
			username: "loginName"
		},
		gender: "female",
		phone: "555-555-5475"
	},
	{
		name: {
			first: "FirstName",
			last: "LastName"
		},
		age: 42,
		email: "me@example.com",
		picture: {
			medium: "http://via.placeholder.com/350x150"
		},
		login: {
			username: "loginName"
		},
		gender: "female",
		phone: "555-555-2255"
	},
	{
		name: {
			first: "FirstName",
			last: "LastName"
		},
		age: 22,
		email: "me@example.com",
		picture: {
			medium: "http://via.placeholder.com/350x150"
		},
		login: {
			username: "loginName"
		},
		gender: "male",
		phone: "555-555-2255"
	},
	{
		name: {
			first: "FirstName",
			last: "LastName"
		},
		age: 25,
		email: "me@example.com",
		picture: {
			medium: "http://via.placeholder.com/350x150"
		},
		login: {
			username: "loginName"
		},
		gender: "male",
		phone: "555-555-5555"
	},
	{
		name: {
			first: "FirstName",
			last: "LastName"
		},
		age: 28,
		email: "me@example.com",
		picture: {
			medium: "http://via.placeholder.com/350x150"
		},
		login: {
			username: "loginName"
		},
		gender: "female",
		phone: "555-555-5475"
	},
	{
		name: {
			first: "FirstName",
			last: "LastName"
		},
		age: 42,
		email: "me@example.com",
		picture: {
			medium: "http://via.placeholder.com/350x150"
		},
		login: {
			username: "loginName"
		},
		gender: "female",
		phone: "555-555-2255"
	},
	{
		name: {
			first: "FirstName",
			last: "LastName"
		},
		age: 22,
		email: "me@example.com",
		picture: {
			medium: "http://via.placeholder.com/350x150"
		},
		login: {
			username: "loginName"
		},
		gender: "male",
		phone: "555-555-2255"
	}
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
        <Contacts list={list} />
        <Footer />
			</div>
		);
	}
}

const Contacts = ({ list }) => (
	<div className="Contacts">
		<Grid>
			<Row className="show-Grid">
				{list.map(person => (
					<Col sm={6} md={3}>
						<Panel bsStyle="primary">
							<Panel.Heading>
								<Panel.Title componentClass="h3">
									{person.name.first} {person.name.last}
								</Panel.Title>
							</Panel.Heading>
							<Panel.Body>
								<Thumbnail href="#" alt="171x180" src={person.picture.medium} />
								<p>{person.email}</p>
								<p>{person.phone}</p>
							</Panel.Body>
							<Panel.Footer>@{person.login.username}</Panel.Footer>
						</Panel>
					</Col>
				))}
			</Row>
		</Grid>
	</div>
);

export default App;
