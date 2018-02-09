import { SAVE_TESTDATA_SUCCESS, UPDATE_TESTDATA_SUCCESS, LOAD_TESTDATA_SUCCESS, DELETE_TESTDATA_SUCCESS } from './TestActions'

const INITIAL_STATE = { 
  testData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SAVE_TESTDATA_SUCCESS:
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

    case LOAD_TESTDATA_SUCCESS:
      return {
        ...state,
        testData: action.payload
      }

    // todo - should you even remove it from the local collection or just refresh the state from the server?
    case DELETE_TESTDATA_SUCCESS:
      const indexToDelete = state.testData.findIndex(testDataItem => testDataItem.id === action.payload);

      return { 
        ...state, 
        testData: state.testData.slice(0, indexToDelete),
      };

    default:
      return state;
  }
}
