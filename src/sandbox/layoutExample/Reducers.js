import TOGGLE_MENU from './Actions'

const INITIAL_STATE = { 
  layoutStuff: [],
  drawerOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  	case TOGGLE_MENU:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }

    default:
      return state;
  }
}
