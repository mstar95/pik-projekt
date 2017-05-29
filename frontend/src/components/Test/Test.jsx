import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';
import { testFetchStart, testFetchSuccess, testFetchFail, testAnswers } from '../../actions';

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

    let answers = {};
    for(let key in values) {
      if(values.hasOwnProperty(key)) {
        answers[key.substring(1)] = values[key];
      }
    }

    dispatch(testAnswers(answers));

    /* var question = {}
    for(let key in values) {
      question[key.substring(1)] = values[key];
    }
    axios({
      method: 'post',
      url: '/api/verify_test',
      data: question
    }).catch(error => console.log(error))
      .then(response => dispatch(testResults(response.data))) */
  }

  render() {
    let { loading, error, test, question } = this.props;

    let content;
    if(error) {
      content = <p className="page-info">{'Error'}</p>
    } else if(loading) {
      content = <p className="page-info">{'Loading...'}</p>
    } else {
      content = (
        <div>
          <p className="page-info">{"Question " + (question + 1) + " of " + test.questions.length}</p>
          <h1>{test.title}</h1>
          <QuestionForm
            question={test.questions[question]}
            onSubmit={this.submit}
          />
        </div>
      );
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
    question: state.test.question,
    error: state.test.error,
    loading: state.test.loading
  }
}

Test = connect(mapStateToProps)(Test)

export default Test;
