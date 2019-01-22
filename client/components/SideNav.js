import React, { Component } from 'react';
import Logo from '../public/images/giticonw.png';

import Auth from './Auth';

export default class SideNav extends Component {
  componentDidMount() {
    this.initSideNav();
  }

  componentDidUpdate() {
    this.initSideNav();
  }

  initSideNav = () => {
    document.addEventListener('DOMContentLoaded', () => {
      M.Sidenav.init(document.querySelectorAll('.sidenav'), null);
    });
  };

  render() {
    return (
      <div className="col">
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i style={{ marginTop: '2rem' }} className="material-icons">menu</i>
        </a>
        <div id="slide-out" className="sidenav">
          <Auth />
        </div>
      </div>
    );
  }
}
