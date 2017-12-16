import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import FlatButton from 'material-ui/FlatButton'
import { bindActionCreators } from 'redux'

// todo clean this up
const mapStateToProps = state => ({
  label: 'go to about page via redux',
  primary: true,
  style: {
    width: '100%'
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onClick: () => push('/about-us')
}, dispatch)

const VisibleNavigationButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlatButton)

export default VisibleNavigationButton
