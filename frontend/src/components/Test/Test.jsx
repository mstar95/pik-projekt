import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import TestForm from './TestForm';
import { connect } from 'react-redux';
import { testFetchStart, testFetchSuccess, testFetchFail, testResults } from '../../actions';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);

    this.getTest(this.props.match.params.id);
  }

  getTest(id) {
    let { dispatch } = this.props;

    dispatch(testFetchStart());

    return axios.get('/api/test/' + id)
      .catch(error => dispatch(testFetchFail()))
      .then(response => dispatch(testFetchSuccess(response.data)));
  }

  submit(values) {
    let { dispatch } = this.props;

    var question = {}
    for(let key in values) {
      question[key.substring(1)] = values[key];
    }
    axios({
      method: 'post',
      url: '/api/verify_test',
      data: question
    }).catch(error => console.log(error))
      .then(response => dispatch(testResults(response.data)))
  }

  render() {
    let { loading, error, test, results } = this.props;

    let content;
    if(!loading && !error) {
      content = (
        <div>
          <p className="page-info">{"Question 1 of 20"}</p>
          <h1>{test.title}</h1>
          <TestForm
            questions={test.questions}
            onSubmit={this.submit}
            results={results}
          />
        </div>
      );
    } else if(error) {
      content = <p>Error</p>
    } else {
      content = <p className="page-info">{'Loading...'}</p>
    }

    return (
      <PageWrapper>
        <div className='page-item'>
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
    error: state.test.error,
    loading: state.test.loading
  }
}

Test = connect(mapStateToProps)(Test)

export default Test;
