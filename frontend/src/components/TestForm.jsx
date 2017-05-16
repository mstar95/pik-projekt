import React from 'react';
import PageWrapper from './PageWrapper';
import axios from 'axios';
import querystring from 'query-string';
import AnswersList from './AnswersList';

class TestForm extends React.Component {

  constructor(props) {
    super(props);
	    
  }

  render() {
     return (
		<ul>
		  {
			this.props.questions.map((item) => {
			  return <li key={item.id}>
				<h2>{item.title}</h2>
				<AnswersList answers={item.answers}></AnswersList>
			  </li>
			})
		  }
		</ul>
	 );
  }
}
export default TestForm;

