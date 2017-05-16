import React from 'react';
import PageWrapper from './PageWrapper';
import TestForm from './TestForm';
import axios from 'axios';
import querystring from 'query-string';

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title:"tytul",
      questions:[
        {
          id: 1,
          title: "Questiads"
        },
        {
          id: 2,
          title: "Questisdasdasddsaasad"
        },
        {
          id: 3,
           title: "Quesassadsa 4"
        }
      ]
    };
    this.getTest = this.getTest.bind(this);
    
  }

  getTest(event) {
    event.preventDefault();

    return axios.get('/api/default_test')
				  .then(response => this.setState(response.data))
				  .catch(error => console.log(error));
  }

  render() {
    return (
      <PageWrapper>
       <div className="page-contentpage-content">
		   <h1>Test:{this.state.title}</h1> 
      <TestForm questions={this.state.questions}/>		 
            <button type="submit" className="btn btn-success" onClick={this.getTest}>Fill test</button>
        </div>
      </PageWrapper>
    )
  }
}
export default Test;

