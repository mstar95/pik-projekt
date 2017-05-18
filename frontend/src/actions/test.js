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
