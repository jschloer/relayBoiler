import React, { PropTypes } from 'react';
import '../../styles/core.scss';
import './CoreLayout.scss';

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout({ children, routes }) {
  return (
    // updated structure
    <div>
        {children}
    </div>
  );
}

CoreLayout.propTypes = {
  routes: PropTypes.array, // redux-simple-router
  children: PropTypes.object
};

export default CoreLayout;
