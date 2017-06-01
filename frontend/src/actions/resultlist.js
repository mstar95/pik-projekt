export const resultListFetchStart = () => {
  return {
    type: 'RESULT_LIST_FETCH_START'
  }
}

export const resultListFetchSuccess = (results) => {
  return {
    type: 'RESULT_LIST_FETCH_SUCCESS',
    results
  }
}

export const resultListFetchFail = () => {
  return {
    type: 'RESULT_LIST_FETCH_FAIL'
  }
}
