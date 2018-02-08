import { CREATE_TESTDATA_SUCCESS, UPDATE_TESTDATA_SUCCESS } from './TestActions'

const INITIAL_STATE = { 
  testData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CREATE_TESTDATA_SUCCESS:
			return { 
				...state, 
				testData: [...state.testData, action.payload],
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
      };

    default:
      return state;
  }
}
