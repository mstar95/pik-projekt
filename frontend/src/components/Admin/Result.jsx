import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import QuestionForm from './QuestionForm';
import { connect } from 'react-redux';
import { testFetchStart, testFetchSuccess, testFetchFail, testAnswers, testResults } from '../../actions';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);

    this.getResult(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
    if(!this.props.test.done && nextProps.test.done) {
      console.log('asdasd');
      this.getResults(nextProps.test.answers,nextProps.test.test.id);
    }
  }

  getResults(answers,id) {
    let { dispatch } = this.props;
    axios({
      method: 'post',
      url: '/api/verify_test/' + id,
      data: answers ,
    }).catch(error => console.log(error))
      .then(response => dispatch(testResults(response.data)))
  }

  getResult(id) {
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
  }

  render() {
    let { loading, error, test, done, results, question } = this.props.test;

    let content;
    if(error) {
      content = <p className="page-info">{'Error'}</p>
    } else if(loading) {
      content = <p className="page-info">{'Loading...'}</p>
    } else if(done) {
      if(results) {
        let score = { points: 0, total: 0 };
        for(let key in results) {
          if(results.hasOwnProperty(key)) {
            score.total++;
            score.points += results[key];
          }
        };
        content = (
          <div>
            <h1 className="page-info">{'Results'}</h1>
            <p>You scored: {score.points} out of {score.total}</p>
          </div>
        )
      } else {
        content = <p className="page-info">{'Loading...'}</p>
      }
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
    test: state.test
  }
}

Result = connect(mapStateToProps)(Result)

export default Result;
