import { TOGGLE_MENU } from './Actions'

const INITIAL_STATE = { 
  layoutStuff: [],
  menuOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  	case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen
      }

    default:
      return state;
  }
}
