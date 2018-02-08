import { connect } from 'react-redux';
import TestDataComponent from './TestDataFormComponent'
import createTestData from '../TestActions'

const mapDispatchToProps = (dispatch) => {
  return { 
  	handleOnClick: values => { dispatch(createTestData.saveNewTestData(values)) },
  }
}

function mapStateToProps(state, ownProps) {
  return {
 		currentTestData: state.testHarness.currentTestData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDataComponent);
