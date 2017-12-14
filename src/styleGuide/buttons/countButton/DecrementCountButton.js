import { connect } from 'react-redux'
import countActions from './actions'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = state => ({
  label: 'decrement',
  primary: true,
  disabled: state.count.isDecrementing,
  style: {
    width: '100%',
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(countActions.decrement())
    }
  }
}

const DecrementCountButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(RaisedButton)

export default DecrementCountButton
