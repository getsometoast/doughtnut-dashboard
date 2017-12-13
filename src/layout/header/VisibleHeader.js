import { connect } from 'react-redux'
import layoutActions from '../actions'
import Header from './Header'

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    open: state.layout.open
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClicked: () => {
      dispatch(layoutActions.toggleDrawer())
    }
  }
}

const VisibleHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default VisibleHeader
