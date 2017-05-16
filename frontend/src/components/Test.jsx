import React from 'react';
import PageWrapper from './PageWrapper';
import TestForm from './TestForm';
import axios from 'axios';
import querystring from 'query-string';

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
    return (
      <PageWrapper>
        {this.state ?
           <div className="page-content">
             <h1>Test:{this.state.title}</h1> 
            <TestForm questions={this.state.questions}/> 
           </div>
          : <p>Loading...</p>
        }
      </PageWrapper>
    )
  }
}
export default Test;

