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
		<select>
		  {
			this.props.answers.map((answer, index) => {
			  return <option key={index} value={answer.id}>
				{answer.title}
			  </option>
			})
		  }
		</select>
	 );
  }
}
		  
export default AnswersList;

