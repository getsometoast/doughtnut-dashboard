import layoutActions from '../actions'

const initialDrawerState = {
  open: false,
}

export default (state = initialDrawerState, action) => {
  switch (action.type) {
    case layoutActions.TOGGLE_DRAWER:
      return {
        ...state,
        open: !state.open 
      }

    default:
      return state
  }
}
