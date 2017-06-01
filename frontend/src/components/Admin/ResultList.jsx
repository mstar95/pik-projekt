import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { resultListFetchStart, resultListFetchSuccess, resultListFetchFail } from '../../actions';

class ResultList extends React.Component {
  constructor(props) {
    super(props);

    this.getResults(this.props.match.params.id);
  }

  getResults(id) {
    let { dispatch } = this.props;

    dispatch(resultListFetchStart());
    return axios.get('/api/user/' + id +  '/results')
      .then(response => dispatch(resultListFetchSuccess(response.data)))
      .catch(error => dispatch(resultListFetchFail()));
  }

  render() {
    let { loading, error, results } = this.props;

    console.log(results);

    let content;
    if (loading) {
      content = <p>{'Loading...'}</p>
    } else if (error) {
      content = <p>{'Error'}</p>
    } else {
      let resultListItems = results.map(result => {
        let questions = result.questions.map(question => (
          <li key={question.id}>
            <h3>{question.question.title}</h3>
            <p>{question.answer.title} : {question.answer.rightAnser ? "true" : "false"}</p>
          </li>
        ));
        return (
          <li key={result.id}>
            <h2>{result.test.title}</h2>
            <p>Result: {result.result} of {result.questions.length}</p>
            <ul>{questions}</ul>
          </li>
        )
      });
      content = <ul className='link-list'>{resultListItems}</ul>
    }

    return (
      <PageWrapper>
        <div className='page-item'>
          <h1 className='page-info'>{'Results'}</h1>
          {content}
        </div>
      </PageWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.resultlist.loading,
    error: state.resultlist.error,
    results: state.resultlist.results
  }
}

ResultList = connect(mapStateToProps)(ResultList)

export default ResultList;
