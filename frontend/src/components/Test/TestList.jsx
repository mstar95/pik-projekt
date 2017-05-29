import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import { connect } from 'react-redux';
import { testListFetchStart, testListFetchSuccess, testListFetchFail } from '../../actions';

class TestList extends React.Component {
  constructor(props) {
    super(props);

    this.getTests();
  }

  getTests() {
    let { dispatch } = this.props;

    dispatch(testListFetchStart());
    return axios.get('/api/tests')
      .catch(error => dispatch(testListFetchFail()))
      .then(response => dispatch(testListFetchSuccess(response.data)));
  }

  render() {
    let { loading, error, tests } = this.props;

    let content;
    if (loading) {
      content = <p>{'Loading...'}</p>
    } else if (error) {
      content = <p>{'Error'}</p>
    } else {
      console.log(tests);
      let testListItems = tests.map(test => (
        <li>{test.title}</li>
      ));
      content = <ul>{testListItems}</ul>
    }

    return (
      <PageWrapper>
        <div className='page-item'>
          <h1 className='page-info'>{'Tests'}</h1>
          {content}
        </div>
      </PageWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.testlist.loading,
    error: state.testlist.error,
    tests: state.testlist.tests
  }
}

TestList = connect(mapStateToProps)(TestList)

export default TestList;
