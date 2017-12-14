import pageActions from './actions'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case pageActions.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case pageActions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case pageActions.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case pageActions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}
