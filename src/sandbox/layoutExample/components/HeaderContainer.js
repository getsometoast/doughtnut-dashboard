import { connect } from 'react-redux'
import actions from '../Actions'
import HeaderComponent from './HeaderComponent'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.sandbox.layoutExample.menuOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClicked: () => {dispatch(actions.toggleMenu())}
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

export default HeaderContainer
