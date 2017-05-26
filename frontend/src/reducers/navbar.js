const defaultState = {
  open: false,
}

const navbar = (state = defaultState, action) => {
  switch (action.type) {
    case 'MENU_TOGGLE':
      return { open: !state.open }
    case 'MENU_CLOSE':
      return { open: false }
    default:
      return state
  }
}

export default navbar;
