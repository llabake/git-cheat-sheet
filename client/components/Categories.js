import React from 'react';
import { connect } from 'react-redux';

import Category from './Category';

export default connect(state => ({
  categories: state.categories,
  searchResults: state.search,
}))(({ categories, searchResults }) => {
  const data = searchResults || categories;
  return (
    data.map(category => (
      <Category key={category._id} category={category} />
    ))
  );
});
