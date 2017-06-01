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
    return axios.get('/api/results' +id)
      .then(response => dispatch(resultListFetchSuccess(response.data)))
      .catch(error => dispatch(resultListFetchFail()));
  }

  render() {
    let { loading, error,results } = this.props;

    let content;
    if (loading) {
      content = <p>{'Loading...'}</p>
    } else if (error) {
      content = <p>{'Error'}</p>
    } else {
      let resultListItems = results.map(result => (
        <li key={result.id}><NavLink to={'/result/' + result.id}>{result.name}</NavLink></li>
      ));
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
    tests: state.resultlist.results
  }
}

Results = connect(mapStateToProps)(Results)

export default Results;
