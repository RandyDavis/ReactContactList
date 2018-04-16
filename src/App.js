import React, { Component } from "react";
import axios from 'axios';
import Navigation from "./Components/Navigation/Nav";
import Footer from './Components/Footer/footer';
import "./App.css";

import Contacts from './Components/Contacts/Contacts';

class App extends Component {
  // _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      list: null
    };

    this.fetchContacts = this.fetchContacts.bind(this);
  }

  fetchContacts() {
    this.setState({ isLoading: true });

    axios('https://randomuser.me/api/?results=50')
      .then(response => {
        this.setState({ list: response.data.results })
      })
      .catch(error => {
        console.log('Error fetching data', error);
      });
  }

  componentDidMount() {
    // this._isMounted = true;
    this.fetchContacts();
  }

  // componentWillMount() {
  //   this.fetchContacts();
  // }

	render() {
    // console.log(this.state);
    const {
      list
    } = this.state;

		return (
			<div className="App">
        <Navigation />
        { list
          ?
          <Contacts list={this.state.list}  />
          : null
        }
        <Footer />
			</div>
		);
	}
}

export default App;
