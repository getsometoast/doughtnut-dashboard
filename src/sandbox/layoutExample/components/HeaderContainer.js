import { connect } from 'react-redux'
import actions from '../Actions'
import HeaderComponent from './HeaderComponent'

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClicked: () => {dispatch(actions.toggleMenu())}
  }
}

const HeaderContainer = connect(null, mapDispatchToProps)(HeaderComponent)

export default HeaderContainer
