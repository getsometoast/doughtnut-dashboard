import { connect } from 'react-redux';
import PageComponent from './PageComponent'

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

function mapStateToProps(state, ownProps) {
  return {
 		content: state.sandbox.layoutExample.contentPages.find(item => item.id === ownProps.match.params.id),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);