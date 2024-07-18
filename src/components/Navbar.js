import React from 'react'
import PropTypes from 'prop-types' //impt short cut for proptypes


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutTitle}</a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Navbar

// Props concept = this is used for rename the names ,we can pass in fuction parameter and use in in any title like 
// for example = about this is a title name
// so we as a {props.aboutTitle}
// in Navbar.js file = <Navbar title="TitleName" aboutTitle="About Us"

Navbar.propTypes = { title : PropTypes.string.isRequired,
                    aboutTitle : PropTypes.string.isRequired
} //pts for propType String
// if i set isRequired then show error . then we have set title and about it is required 


Navbar.defaultProps = { title : "set title here",
    aboutTitle :"About title here"
}
// A JavaScript Promise object can be:

// Pending - undefined 
// Fulfilled - result
// Rejected - error
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.