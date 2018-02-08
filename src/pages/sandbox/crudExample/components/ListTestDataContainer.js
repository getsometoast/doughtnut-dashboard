import { connect } from 'react-redux';
import ListTestDataComponent from './ListTestDataComponent'
import createTestData from '../TestActions'

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

function mapStateToProps(state, ownProps) {
  return {
  	testDataItems: state.testHarness.testData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTestDataComponent);
