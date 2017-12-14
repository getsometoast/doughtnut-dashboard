import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import FlatButton from 'material-ui/FlatButton'

const mapStateToProps = state => ({
  label: 'go to about page via redux',
  primary: true,
  style: {
    width: '100%'
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: () => push('/about-us') // todo - THIS DOES NOT WORK
  }
}

const VisibleNavigationButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlatButton)

export default VisibleNavigationButton
