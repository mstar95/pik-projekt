import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import TestForm from './TestForm';
import { connect } from 'react-redux';
import { testFetchSuccess, testFetchFail } from '../../actions';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.submit = this.submit.bind(this);

    if(!props.fetched) {
      this.getTest();
    }
  }

  getTest() {
    return axios.get('/api/default_test')
      .catch(error => this.dispatch(testFetchFail()))
      .then(response => this.dispatch(testFetchSuccess(response.data)));
  }

  submit(values) {
    console.log('test submit', values);
  }

  render() {
    let content;
    if(!this.props.loading) {
      content = (
        <div>
          <h1>Test:{this.props.test.title}</h1>
          <TestForm
            questions={this.props.test.questions}
            onSubmit={this.submit}
          />
        </div>
      );
    } else {
      content = <p>{'Loading...'}</p>
    }

    return (
      <PageWrapper>
        <div className='page-content'>
          { content }
        </div>
      </PageWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    test: state.test.test,
    fetched: state.test.fetched,
    loading: !state.test.fetched && !state.test.fetchFailed
  }
}

Test = connect(mapStateToProps)(Test)

export default Test;
