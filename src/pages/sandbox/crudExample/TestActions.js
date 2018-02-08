import axios from 'axios'
import history from '../../../history';

export const CREATE_TESTDATA = 'test/CREATE_TESTDATA';
export const SAVE_TESTDATA_SUCCESS = 'test/SAVE_TESTDATA_SUCCESS';
export const UPDATE_TESTDATA_SUCCESS = 'test/UPDATE_TESTDATA_SUCCESS';

const ROOT_URL = 'http://localhost:3001';

const saveTestDataSuccess = testData => {
	return {
    type: SAVE_TESTDATA_SUCCESS,
    payload: testData
  }
}

const updateTestDataSuccess = testData => {
	return {
    type: UPDATE_TESTDATA_SUCCESS,
    payload: testData
  }
}

export const saveNewTestData = newTestData => {
	return (dispatch) => {
	  return axios.post(`${ROOT_URL}/testData`, newTestData, {
        headers: {
          'Content-Type': 'application/json',
        }
    	})
	  	.then((response) => {
			  dispatch(saveTestDataSuccess(response.data));
				history.push('/sandbox/crudExample/view/' + response.data.id); // do this here because we have access to the id
	  	})
	  	.catch((error) => {
	  		console.log('Handle Error Here... ' + error)
	  	});
	}
}

export const updateTestData = testData => {
	return (dispatch) => {
	  return axios.put(`${ROOT_URL}/testData/${testData.id}`, testData, {
        headers: {
          'Content-Type': 'application/json',
        }
    	})
	  	.then((response) => {
			  dispatch(updateTestDataSuccess(response.data));
	  	})
	  	.catch((error) => {
	  		console.log('TestActions: HTTP ERROR RESPONSE: ' + error)
	  	});
	}
}

export default {
	saveNewTestData,
	updateTestData,
}