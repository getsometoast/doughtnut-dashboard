import { connect } from 'react-redux'
import MenuComponent from './MenuComponent'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.sandbox.layoutExample.menuOpen
  }
}

const MenuContainer = connect(
  mapStateToProps
)(MenuComponent)

export default MenuContainer
