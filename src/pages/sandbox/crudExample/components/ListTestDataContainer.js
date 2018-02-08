import { connect } from 'react-redux';
import ListTestDataComponent from './ListTestDataComponent'
import createTestData from '../TestActions'

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTestDataComponent);
