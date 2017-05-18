import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import TestForm from './TestForm';
import { connect } from 'react-redux';
import { testFetchSuccess, testFetchFail, testResults } from '../../actions';

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
    var question = {}
    for(let key in values) {
           question[key.substring(1)] = values[key];
       }
    axios({
      method: 'post',
      url: '/api/verify_test',
      data: question
      }).catch(error => console.log(error))
      .then(this.dispatch(testResults(response.data)))
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
            results={this.props.results}
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
    results: state.test.results,
    fetched: state.test.fetched,
    loading: !state.test.fetched && !state.test.fetchFailed
  }
}

Test = connect(mapStateToProps)(Test)

export default Test;
