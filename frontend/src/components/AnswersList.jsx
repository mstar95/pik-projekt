import React from 'react';
import PageWrapper from './PageWrapper';
import axios from 'axios';
import querystring from 'query-string';

class AnswersList extends React.Component {

  constructor(props) {
	super(props);
  }

  render() {
     return (
		<ul>
		  {
			this.props.answers.map((answer) => {
			  return <li key={answer.id}>
				<h2>{item.title}</h2>
			  </li>
			})
		  }
		</ul>
	 );
  }
}
		  
export default AnswersList;

