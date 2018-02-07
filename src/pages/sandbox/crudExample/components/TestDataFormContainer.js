import { connect } from 'react-redux';
import TestDataComponent from './TestDataFormComponent'
import createTestData from '../TestActions'

// i think this is where you wire up action creators that will be called by the component
const mapDispatchToProps = (dispatch) => {
  return { // this should be the action we want to use to handle an event
  	handleOnClick: values => { dispatch(createTestData.createTestData(values)) } // need to pass argument to this
  }
}

// i think this is where you map parts of the state tree to the props of the component 
// that this container wraps (if thats the right word?)
// this also has something to do with reducers... as in, they're in the state object you're mapping to...
function mapStateToProps(state, ownProps) {
  return {
 		currentTestData: state.testHarness.currentTestData, // this should be the data we want to use to display in the TestDataComponent
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDataComponent);
