import React from 'react';
import { Field, reduxForm } from 'redux-form';

class QuestionForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { handleSubmit, question } = this.props;
    let name = 'q' + question.id;

    return (
      <form onSubmit={handleSubmit}>
        <h2>{question.title}</h2>
        {
          question.answers.map((answer) => (
            <label key={answer.id} className="form-label">
              <Field
                name={name}
                component="input"
                type="radio"
                value={'' + answer.id}
                required
              />
            {answer.title}
            </label>
          ))
        }
        <div className="form-submit">
          <button type="submit">{'Next question'}</button>
        </div>
      </form>
    );
  }
}

QuestionForm = reduxForm({
  form: 'question'
})(QuestionForm);

export default QuestionForm;
