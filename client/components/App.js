import React, { Component } from 'react';
import SideNav from "./SideNav";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <SideNav />
        <div className="container">
          <SearchBar />
          <Categories />
        </div>
      </div>
    )
  }
}
