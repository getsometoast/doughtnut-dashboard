import { CREATE_TESTDATA_SUCCESS, UPDATE_TESTDATA_SUCCESS, RESET_TESTDATA } from './TestActions'

const INITIAL_STATE = { 
  testData: [],
  currentTestData: null, // store current state because it keeps getting updated while we're editing form data
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CREATE_TESTDATA_SUCCESS:
			return { 
				...state, 
				testData: [...state.testData, action.payload],
        currentTestData: action.payload
			};

    case UPDATE_TESTDATA_SUCCESS:
      const updatedItems = state.testData.map(testDataItem => {
        if (testDataItem.id === action.payload.id) {
          return { ...testDataItem, ...action.payload }
        }

        return testDataItem;
      });

      return { 
        ...state, 
        testData: updatedItems,
        currentTestData: action.payload
      };

    case RESET_TESTDATA:
      return {
        ...state, 
      }

    default:
      return state;
  }
}
