import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="container">

  <div className="d-flex justify-content-between w-40 bg-light my-4 text-dark">
      <div><h1>Our Table</h1></div>
      <div><Link to="/add" className="btn btn-dark ">Add Item</Link></div>
  </div>


    </div>
  )
}

export default Header;