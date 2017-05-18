import React from 'react';
import AnswersList from './AnswersList';

class TestForm extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form>
        {this.props.questions.map((item) =>
          <div key={item.id}>
            <h2>{item.title}</h2>
            <AnswersList answers={item.answers}></AnswersList>
          </div>
        )}
        <button type="submit" onClick={console.log("i am happy")}>Submit</button>
      </form>
    );
  }
}
export default TestForm;
