import { connect } from 'react-redux';
import ViewTestDataComponent from './ViewTestDataComponent'

function mapStateToProps(state, ownProps) {
	console.log(ownProps);
	console.log(state);
  return {
 		currentTestData: state.testHarness.currentTestData,
  };
}

export default connect(mapStateToProps)(ViewTestDataComponent);
