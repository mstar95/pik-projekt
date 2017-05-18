import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderSelectField = ({input, required, children, touched, error}) => (
  <div>
    <select {...input} required={required}>
      {children}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

class TestForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {handleSubmit, pristine, submitting} = this.props;

    const fields = this.props.questions.map((question) => {
      const value = 44;
      const answers = question.answers.map((answer, index) =>
        <option
          key={answer.id}
          value={answer.id}>
          {answer.title}
        </option>
      );

      let field;
      if(!this.props.results) {
        field = (
          <Field name={'q' + question.id} component={renderSelectField} required>
            <option value="">
              Wybierz
            </option>
            { answers }
          </Field>
        )
      } else if(this.props.results[question.id]) {
        field = <p>{'Udało się'}</p>
      } else {
        field = <p>{'Nie udało się'}</p>
      }

      return (
        <div key={question.id}>
          <h2>{question.title}</h2>
          { field }
        </div>
      )
    });

    let score = 0;
    let max = this.props.questions.length;
    for(let key in this.props.results) {
      if(this.props.results[key]) {
        score++;
      }
    }

    return (
        <form onSubmit={handleSubmit}>
        { fields }
        <button type="submit">Submit</button>

        { this.props.results ? 'Twój wynik to: ' + score + '/' + max : "" }
      </form>
    );
  }
}

TestForm = reduxForm({
  form: 'test'
})(TestForm);

export default TestForm;
