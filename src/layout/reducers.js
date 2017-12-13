import layoutActions from './actions'

const initialDrawerState = {
  drawerOpen: false,
}

export default (state = initialDrawerState, action) => {
  switch (action.type) {
    case layoutActions.TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }

    default:
      return state
  }
}
