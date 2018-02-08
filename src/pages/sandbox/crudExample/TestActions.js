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
export const UPDATE_TESTDATA_SUCCESS = 'test/UPDATE_TESTDATA';

const ROOT_URL = 'http://localhost:3001';

// action for persisting test data to the server
export const createTestData = newTestData => {
	console.log('TestActions: TEST DATA:');
	console.log(newTestData);

	return (dispatch) => {
		console.log('TestActions: CALLING API');

		// do a put if it's an update, do a post if it's a create...
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
				history.push('/sandbox/crudExample/view/' + response.data.id)
	  	})
	  	.catch((error) => {
	  		// see what came back
	  		console.log('TestActions: HTTP ERROR RESPONSE: ' + error)
	  	});
	}
}

// action for updating test data to the server
export const updateTestData = testData => {
	return (dispatch) => {
	  return axios.put(`${ROOT_URL}/testData/${testData.id}`, testData, {
        headers: {
          'Content-Type': 'application/json',
        }
    	})
	  	.then((response) => {
			  dispatch({
			    type: UPDATE_TESTDATA_SUCCESS,
			    payload: response.data
			  });
	  	})
	  	.catch((error) => {
	  		console.log('TestActions: HTTP ERROR RESPONSE: ' + error)
	  	});
	}
}

export default {
	createTestData,
	updateTestData,
}