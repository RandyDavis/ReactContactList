import React from 'react';
import { Grid, Col, Row, Panel, Image } from 'react-bootstrap';

const Contacts = ({ list }) => (
    <div className="Contacts">
		<Grid>
            <Row className="show-Grid">
				{list.map(person => (
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

// class Contacts extends Component {
//     render() {
//         let contacts;
//         if (this.props.list.results) {
//             contacts = this.props.list.map(person => {
//                 <Col sm={6} md={3}>
//                     <Panel bsStyle="primary">
//                         <Panel.Heading>
//                             <Panel.Title componentClass="h3">
//                                 {person.name.first} {person.name.last}
//                             </Panel.Title>
//                         </Panel.Heading>
//                         <Panel.Body>
//                             <Thumbnail href="#" alt="171x180" src={person.picture.medium} />
//                             <p>{person.email}</p>
//                             <p>{person.phone}</p>
//                         </Panel.Body>
//                         <Panel.Footer>@{person.login.username}</Panel.Footer>
//                     </Panel>
//                 </Col>
//             })
//         }
//         return(
//             <div className="Contacts">
//                 <Grid>
//                     <Row className="show-Grid">
//                         {contacts}
//                     </Row>
//                 </Grid>
//             </div>
//         )
//     }
// };

export default Contacts;