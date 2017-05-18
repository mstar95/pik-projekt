import React from 'react';
import axios from 'axios';
import PageWrapper from '../PageWrapper';
import TestForm from './TestForm';

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.getTest();
  }

  getTest() {
    return axios.get('/api/default_test')
      .then(response => this.setState(response.data))
      .catch(error => console.log(error));
  }

  render() {
    let content;
    if(this.state) {
      content = (
        <div className='page-content'>
          <h1>Test:{this.state.title}</h1>
          <TestForm questions={this.state.questions}/>
        </div>
      );
    } else {
      content = <p>{'Loading...'}</p>
    }

    return (
      <PageWrapper>
        { content }
      </PageWrapper>
    )
  }
}
export default Test;
