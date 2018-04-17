import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row, Panel, Image } from 'react-bootstrap';

const isSearched = searchTerm => person =>
  person.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
  person.name.last.toLowerCase().includes(searchTerm.toLowerCase());

const Contacts = ({ list, pattern }) => (
    <div className="Contacts">
		<Grid>
            <Row className="show-Grid">
				{list.filter(isSearched(pattern)).map(person => (
					<Col key={person.email} sm={6} md={3}>
						<Panel bsStyle="primary">
							<Panel.Heading>
								<Panel.Title componentClass="h3">
									{person.name.first} {person.name.last}
								</Panel.Title>
							</Panel.Heading>
							<Panel.Body>
                                <Image src={person.picture.large} circle />
                                <p>
                                    <br/>
                                    <a href={`mailto: ${person.email}`} target="_blank">{person.email}</a>
                                </p>
                                <p><a href={`tel:+${person.phone}`} target="_blank">{person.phone}</a></p>
							</Panel.Body>
							<Panel.Footer> <a href={`http://twitter.com/${person.login.username}`} target="_blank">@{person.login.username}</a></Panel.Footer>
						</Panel>
					</Col>
				))}
			</Row>
		</Grid>
	</div>
);

Contacts.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            email: PropTypes.string.isRequired,
            name: PropTypes.object.isRequired,
            phone: PropTypes.string.isRequired,
            picture: PropTypes.object.isRequired,
            login: PropTypes.object.isRequired
        })
    )
}

export default Contacts;