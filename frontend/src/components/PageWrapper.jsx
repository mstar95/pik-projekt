import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { menuClose } from '../actions';

let PageWrapper = (props) => {
  let onClick = () => {
    if(props.open) {
      props.dispatch(menuClose());
    }
  }
  return (
    <div>
      <Navbar />
      <div
          className={'page-wrapper' + (props.open ? ' pushed' : '')}
          onClick={onClick}>
        {props.children}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    open: state.navbar.open
  }
}

PageWrapper = connect(mapStateToProps)(PageWrapper)

export default PageWrapper;
