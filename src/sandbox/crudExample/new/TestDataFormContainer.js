import { connect } from 'react-redux';
import TestDataComponent from './TestDataFormComponent'
import createTestData from '../TestActions'

const mapDispatchToProps = (dispatch) => {
  return { 
  	handleOnClick: values => { dispatch(createTestData.saveNewTestData(values)) },
  }
}

export default connect((state, ownProps) => { return {}; }, mapDispatchToProps)(TestDataComponent);	