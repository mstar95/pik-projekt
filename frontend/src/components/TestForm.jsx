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
	  console.log(this.props);
     return (
		<form>
		  {
			this.props.questions.map((item) => {
			  return <div key={item.id}>
				<h2>{item.title}</h2>
				<AnswersList answers={item.answers}></AnswersList>
			  </div>
			})
		  }
		  <button type="submit" onClick={console.log("i am happy")}>Submit</button>
		</form>
	 );
  }
}
export default TestForm;

