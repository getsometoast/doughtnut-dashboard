import { connect } from 'react-redux'
import MenuDrawer from './MenuDrawer'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.layout.drawerOpen
  }
}

const VisibleMenuDrawer = connect(
  mapStateToProps
)(MenuDrawer)

export default VisibleMenuDrawer
