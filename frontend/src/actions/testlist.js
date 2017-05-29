export const testListFetchStart = () => {
  return {
    type: 'TEST_LIST_FETCH_START'
  }
}

export const testListFetchSuccess = (tests) => {
  return {
    type: 'TEST_LIST_FETCH_SUCCESS',
    tests
  }
}

export const testListFetchFail = () => {
  return {
    type: 'TEST_LIST_FETCH_FAIL'
  }
}
