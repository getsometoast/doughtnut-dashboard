import { connect } from 'react-redux';
import PageComponent from './PageComponent'

function mapStateToProps(state, ownProps) {
  return {
 		content: state.sandbox.layoutExample.contentPages.find(item => item.id === ownProps.match.params.id),
  };
}

export default connect(mapStateToProps, null)(PageComponent);