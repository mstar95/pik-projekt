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
    console.log(props);
  }

  render() {
    const fields = this.props.questions.map((question) => {
      const value = 44;
      const answers = question.answers.map((answer, index) =>
        <option
          key={answer.id}
          value={answer.id}>
          {answer.title}
        </option>
      );

      return (
        <div key={question.id}>
          <h2>{question.title}</h2>
          <Field name={question.title} component={renderSelectField} required>
            <option value="">
              Wybierz
            </option>
            { answers }
          </Field>
        </div>
      )
    });

    const {handleSubmit, pristine, submitting} = this.props

    return (
        <form onSubmit={handleSubmit}>
        { fields }
        <button type="submit">Submit</button>
      </form>
    );
  }
}

TestForm = reduxForm({
  form: 'test'
})(TestForm);

export default TestForm;
