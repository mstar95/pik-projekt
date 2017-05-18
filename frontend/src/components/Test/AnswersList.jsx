import React from 'react';

class AnswersList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select>
        {this.props.answers.map((answer, index) =>
          <option key={index} value={answer.id}>
            {answer.title}
          </option>
        )}
      </select>
    )
  }
}

export default AnswersList;
