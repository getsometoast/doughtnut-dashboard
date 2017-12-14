import countActions from './actions'

const initialState = {
  value: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case countActions.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case countActions.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        isIncrementing: !state.isIncrementing
      }

    case countActions.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case countActions.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}
