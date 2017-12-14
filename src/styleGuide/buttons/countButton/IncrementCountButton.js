import { connect } from 'react-redux'
import countActions from './actions'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = state => ({
  label: 'increment',
  primary: true,
  disabled: state.count.isIncrementing,
  style: {
    width: '100%',
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(countActions.increment())
    }
  }
}

const IncrementCountButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(RaisedButton)

export default IncrementCountButton
