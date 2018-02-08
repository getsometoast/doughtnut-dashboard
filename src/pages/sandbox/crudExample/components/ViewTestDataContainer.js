import { connect } from 'react-redux';
import ViewTestDataComponent from './ViewTestDataComponent'
import createTestData from '../TestActions'
import { withRouter } from 'react-router';

const mapDispatchToProps = (dispatch) => {
  return {
  	handleOnClick: values => { dispatch(createTestData.updateTestData(values)) },
  }
}

function mapStateToProps(state, ownProps) {
  return {
 		currentTestData: state.testHarness.testData.find(item => item.id === ownProps.match.params.id),
  };
}

// might be a nicer way to pass the id through as a prop instead of using with router...
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewTestDataComponent));