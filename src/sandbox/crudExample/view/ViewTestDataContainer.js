import { connect } from 'react-redux';
import ViewTestDataComponent from './ViewTestDataComponent'
import createTestData from '../TestActions'
import { withRouter } from 'react-router';

const mapDispatchToProps = (dispatch) => {
  return {
  	updateTestData: values => { dispatch(createTestData.updateTestData(values)) },
  	deleteTestData: id => { dispatch(createTestData.deleteTestData(id)) },
  }
}

function mapStateToProps(state, ownProps) {
  return {
 		currentTestData: state.sandbox.crudExample.testData.find(item => item.id === ownProps.match.params.id),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewTestDataComponent));