import { CREATE_TESTDATA, CREATE_TESTDATA_SUCCESS } from './TestActions'

const INITIAL_STATE = { 
  testData: [],
  currentTestData: null, // store current state because it keeps getting updated while we're editing form data
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TESTDATA:
    	return { 
    		...state,
    		currentTestData: { name: '', date: '', array: [] }
    	};

    case CREATE_TESTDATA_SUCCESS:
			return { 
				...state, 
				testData: [...state.testData, action.payload]
			};

    default:
      return state;
  }
}
