import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import NavigationButton from './NavigationButton'

const mapStateToProps = state => ({
  label: 'go to about page via redux' // todo - THIS DOESNT WORK where should this really go?
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

const VisibleNavigationButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationButton)

export default VisibleNavigationButton
