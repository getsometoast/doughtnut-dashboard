import { connect } from 'react-redux';
import ListTestDataComponent from './ListTestDataComponent'
import createTestData from '../TestActions'

const mapDispatchToProps = (dispatch) => {
	return {
		loadTestData: () => {dispatch(createTestData.loadTestData())},
	}
}

function mapStateToProps(state, ownProps) {
  return {
  	testDataItems: state.sandbox.crudExample.testData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTestDataComponent);
