/*

action to create test data
	- success
	- error
action to delete test data
	- success
	- error
action to get all test data
	- success
	- error

- need to change location to view when we persist data successfully
- need to change state when we edit data successfully

*/

import axios from 'axios'
import history from '../../history';

export const CREATE_TESTDATA = 'test/CREATE_TESTDATA';
export const CREATE_TESTDATA_SUCCESS = 'test/CREATE_TESTDATA_SUCCESS';

const ROOT_URL = 'http://localhost:3001';

// DO I ACTUALLY NEED THUNK MIDDLEWARE OR NOT?!?!
export const createTestData = (newTestData) => {
	console.log("TEST DATA: " + newTestData); // execution gets to here but doesn't continue...

	// return function with dispatch argument for thunk middleware to call
	return (dispatch) => {
		// persist the data
		console.log("CREATING TEST DATA"); // todo - this is not getting called when I call the action.

	  const response = axios({
	    method: 'post',
	    data: newTestData,
	    url: `${ROOT_URL}/testData`
	  });

	  // see what came back
	  console.log(response)

	  // dispatch the success action
	  dispatch({
	    type: CREATE_TESTDATA_SUCCESS,
	    payload: response
	  });

		// move on to the view page to load the newly persisted data
		return history.push('/testData/' + response.id)
	}
}

export default {
	createTestData
}