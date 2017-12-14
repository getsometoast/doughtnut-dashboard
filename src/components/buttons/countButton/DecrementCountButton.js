import { connect } from 'react-redux'
import pageActions from '../../../pages/actions'
import RaisedButton from 'material-ui/RaisedButton'

const mapStateToProps = state => ({
  label: 'decrement', // refactor out so that the IncrementCountButton function creates the label
  primary: true,
  disabled: state.page.isDecrementing,
  style: {
    width: '100%',
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(pageActions.decrement())
    }
  }
}

const DecrementCountButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(RaisedButton)

export default DecrementCountButton
