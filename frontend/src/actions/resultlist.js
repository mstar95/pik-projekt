export const resultListFetchStart = () => {
  return {
    type: 'RESULT_LIST_FETCH_START'
  }
}

export const resultListFetchSuccess = (tests) => {
  return {
    type: 'RESULT_LIST_FETCH_SUCCESS',
    tests
  }
}

export const resultListFetchFail = () => {
  return {
    type: 'RESULT_LIST_FETCH_FAIL'
  }
}
