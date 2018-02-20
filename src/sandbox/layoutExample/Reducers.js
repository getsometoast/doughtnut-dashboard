import { TOGGLE_MENU } from './Actions'

const INITIAL_STATE = { 
  layoutStuff: [],
  menuOpen: false,
  contentPages: [{
    id: '1',
    title: 'THE TITTLE',
    article: 'THE ARTICLE'
  },
  {
    id: '2',
    title: 'THE TITTLE 2',
    article: 'THE ARTICLE 2'
  }
  ]
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
