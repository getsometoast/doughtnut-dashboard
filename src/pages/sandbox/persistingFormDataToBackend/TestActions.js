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

// DO I ACTUALLY NEED THUNK MIDDLEWARE OR NOT?!?!

import axios from 'axios'
import history from '../../../history';

export const CREATE_TESTDATA = 'test/CREATE_TESTDATA';
export const CREATE_TESTDATA_REQUEST = 'test/CREATE_TESTDATA_REQUEST';
export const CREATE_TESTDATA_SUCCESS = 'test/CREATE_TESTDATA_SUCCESS';
export const RECIEVE_TESTDATA = 'test/RECIEVE_TESTDATA'

const ROOT_URL = 'http://localhost:3001';

// action for persisting test data to the server
export const createTestData = newTestData => {
	console.log('TestActions: TEST DATA:');
	console.log(newTestData);

	return (dispatch) => {
		console.log('TestActions: CALLING API');

	  return axios.post(`${ROOT_URL}/testData`, newTestData, {
        headers: {
          'Content-Type': 'application/json',
        }
    	})
	  	.then((response) => {
	  		// see what came back
	  		console.log('TestActions: HTTP POST RESPONSE');
	  		console.log(response);

	  		// dispatch the success action
			  dispatch({
			    type: CREATE_TESTDATA_SUCCESS,
			    payload: response.data
			  });

				// move on to the view page to load the newly persisted data
				history.push('/testData/' + response.data.id)
	  	})
	  	.catch((error) => {
	  		// see what came back
	  		console.log('TestActions: HTTP ERROR RESPONSE: ' + error)
	  	});
	}
}

export default {
	createTestData
}