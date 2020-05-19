import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      businesses: [],
    }; 
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.SearchBar(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }
  
  render() {
    return (
      <div className="App">
  <h1 className='top'>what are you in the mood for?</h1>
  <SearchBar searchYelp={this.searchYelp} />
  <BusinessList businesses={this.state.businesses} />
</div>
    );
  }
}
export default App;
