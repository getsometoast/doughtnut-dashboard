import { connect } from 'react-redux';
import ViewTestDataComponent from './ViewTestDataComponent'
import createTestData from '../TestActions'

const mapDispatchToProps = (dispatch) => {
  return {
  	handleOnClick: values => { dispatch(createTestData.updateTestData(values)) }
  }
}

function mapStateToProps(state, ownProps) {
	console.log(ownProps);
	console.log(state);
  return {
 		currentTestData: state.testHarness.currentTestData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTestDataComponent);
