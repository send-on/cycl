import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Stats
} from 'react-instantsearch-dom';
import './App.css';
import Hit from './Hits.js'
import MapContainer from './MapContainer'
import { geolocated } from "react-geolocated";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { APPID, SEARCH_API_KEY, indexName } from './config';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const searchClient = algoliasearch(APPID, SEARCH_API_KEY);

class App extends Component {
  
  render() {
    return (
      <div>
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <header className="header">
            <h1 className="header-title">
              <a href="/">Cycl</a>
            </h1>
            <SearchBox
              className="searchbox"
              translations={{
                placeholder: '',
              }}
            />
          </header>
          <div>
            <div className="info-area">
              <Stats />
            </div>
            <div className="container">
              <div className="left-container">
                <div className="search-panel">
                  <div className="search-panel__results">
                    <Hits hitComponent={Hit} />
                    <div className="pagination">
                      <Pagination />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-container">
                <div className="map-panel">
                  <div className="map-panel__results">
                    <MapContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);

// export default App;