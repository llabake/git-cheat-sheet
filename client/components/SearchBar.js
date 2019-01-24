import React from 'react';
import { connect } from 'react-redux';

import { searchCategory } from "../actions/categoryAction";

export const SearchBar = ({ searchCategory: search }) => (
  <div className="row">
    <div className="input-field col offset-s3 s6">
      <i style={{ top: '1rem' }} className="material-icons prefix">search</i>
      <input
        onChange={ event => search(event.target.value) }
        id="search"
        type="text"
      />
      <label className="search-placeholder" htmlFor="search" style={{ textAlign: 'center' }}>
        The Awesome Git Cheat Sheet
      </label>
    </div>
  </div>
);

export default connect(null, { searchCategory })(SearchBar);
