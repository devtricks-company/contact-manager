// rfce ==> React function component export
// rafce ==> React Arrow function component export

//props is data that you want inject from outside of components
//state is data that you define or use inside components

import React from "react";
import PropTypes from 'prop-types';



const Header = ({title,color}) => {
   
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact 
              </a>
            </li>
            
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}

Header.defaultProps = {
    title:'Google',
    color:'danger'
}

export default Header;
