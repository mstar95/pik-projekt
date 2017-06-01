const defaultState = {
  loading: true,
  error: false,
  done: false,
  question: 0
}

const test = (state = defaultState, action) => {
  switch (action.type) {
    case 'TEST_FETCH_START':
      return defaultState;
    case 'TEST_FETCH_SUCCESS':
      return {
        loading: false,
        error: false,
        test: action.test,
        done: false,
        question: 0
      }
    case 'TEST_FETCH_FAIL':
      return {
        loading: false,
        error: true
      }
    case 'TEST_RESULTS':
      return Object.assign({}, state, {
        results: action.results
      })
    case 'TEST_ANSWERS':
      let question = Object.keys(action.answers).length;
      let done = question >= state.test.questions.length;
      return Object.assign({}, state, {
        question,
        answers: action.answers,
        done
      })
    default:
      return state
  }
}

export default test;
