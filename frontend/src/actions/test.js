export const testFetchStart = () => {
  return {
    type: 'TEST_FETCH_START'
  }
}

export const testFetchSuccess = (test) => {
  return {
    type: 'TEST_FETCH_SUCCESS',
    test
  }
}

export const testFetchFail = () => {
  return {
    type: 'TEST_FETCH_FAIL'
  }
}

export const testResults = (results) => {
  return {
    type: 'TEST_RESULTS',
    results
  }
}
