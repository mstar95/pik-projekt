import React from 'react';
import Navbar from './Navbar';

const PageWrapper = (props) => (
  <div>
    <Navbar />
    <div className='page-wrapper'>
      {props.children}
    </div>
  </div>
)

export default PageWrapper;
