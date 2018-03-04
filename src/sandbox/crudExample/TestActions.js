import axios from 'axios'
import history from '../../history';

export const CREATE_TESTDATA = 'test/CREATE_TESTDATA';
export const SAVE_TESTDATA_SUCCESS = 'test/SAVE_TESTDATA_SUCCESS';
export const UPDATE_TESTDATA_SUCCESS = 'test/UPDATE_TESTDATA_SUCCESS';
export const LOAD_TESTDATA_SUCCESS = 'test/LOAD_TESTDATA_SUCCESS';
export const DELETE_TESTDATA_SUCCESS = 'test/DELETE_TESTDATA_SUCCESS';

const ROOT_URL = 'http://localhost:3001';

const createSuccessAction = (payload, identifier) => {
	return {
		type: identifier,
		payload
	}
}

export const deleteTestData = (id) => {
	return (dispatch) => {
		return axios.delete(`${ROOT_URL}/testData/${id}`)
		.then(response => {
			history.push('/sandbox/crudExample');
			dispatch(createSuccessAction(id, DELETE_TESTDATA_SUCCESS));
		})
		.catch(error => {
			console.log('Handle Error Here... ' + error)
		})
	}
}

export const loadTestData = () => {
	return (dispatch) => {
		return axios.get(`${ROOT_URL}/testData`)
		.then(response => {
			dispatch(createSuccessAction(response.data, LOAD_TESTDATA_SUCCESS));
		})
		.catch(error => {
			console.log('Handle Error Here... ' + error)
		})
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
			  dispatch(createSuccessAction(response.data, SAVE_TESTDATA_SUCCESS));
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
			  dispatch(createSuccessAction(response.data, UPDATE_TESTDATA_SUCCESS));
	  	})
	  	.catch((error) => {
	  		console.log('TestActions: HTTP ERROR RESPONSE: ' + error)
	  	});
	}
}

export default {
	saveNewTestData,
	updateTestData,
	loadTestData,
	deleteTestData,
}