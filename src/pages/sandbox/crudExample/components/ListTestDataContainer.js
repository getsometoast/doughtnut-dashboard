import { connect } from 'react-redux';
import ListTestDataComponent from './ListTestDataComponent'

function mapStateToProps(state, ownProps) {
  return {
  	testDataItems: state.testHarness.testData,
  };
}

export default connect(mapStateToProps)(ListTestDataComponent);
