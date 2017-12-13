import { connect } from 'react-redux'
import layoutActions from '../actions'
import MenuDrawer from './MenuDrawer'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.layout.drawerOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestChange: () => {
      console.log("ON REQUEST CHANGE")
      dispatch(layoutActions.toggleDrawer())
    }
  }
}

const VisibleMenuDrawer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuDrawer)

export default VisibleMenuDrawer
