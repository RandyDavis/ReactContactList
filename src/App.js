import React, { Component } from "react";
import axios from 'axios';
import Navigation from "./Components/Navigation/Nav";
// import Search from './Components/Search/Search';
import Footer from './Components/Footer/Footer';
import PropTypes from 'prop-types';
import {Grid, FormGroup, FormControl} from 'react-bootstrap';
import "./App.css";

import Contacts from './Components/Contacts/Contacts';

const Search = ({ value, onChange }) =>
    <Grid>
        <form>
            <FormGroup bsSize="large">
                <FormControl
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Search"
                />
            </FormGroup>
        </form>
    </Grid>

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      list: null,
      searchTerm: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.fetchContacts = this.fetchContacts.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  fetchContacts() {
    this.setState({ isLoading: true });

    axios('https://randomuser.me/api/?results=50')
      .then(response => {
        this._isMounted && this.setState({ list: response.data.results })
      })
      .catch(error => {
        console.log('Error fetching data', error);
      });
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchContacts();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

	render() {
    const {
      list,
      searchTerm
    } = this.state;

		return (
			<div className="App">
        <Navigation />
        <Search value={searchTerm} onChange={this.onSearchChange} />
        { list
          ?
          <Contacts list={list} pattern={searchTerm} />
          : null
        }
        <Footer />
			</div>
		);
	}
}

export default App;
