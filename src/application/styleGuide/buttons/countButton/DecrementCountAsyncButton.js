import { connect } from 'react-redux'
import countActions from './actions'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = state => ({
  label: 'decrement async',
  secondary: true,
  disabled: state.application.count.isDecrementing,
  style: {
    width: '100%',
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(countActions.decrementAsync())
    }
  }
}

const DecrementCountAsyncButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(RaisedButton)

export default DecrementCountAsyncButton
