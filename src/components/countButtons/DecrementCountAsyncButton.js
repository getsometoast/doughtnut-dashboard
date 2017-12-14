import { connect } from 'react-redux'
import pageActions from '../../pages/actions'
import CountButton from './CountButton'

const mapStateToProps = state => ({
  label: 'decrement async', // refactor out so that the IncrementCountButton function creates the label
  secondary: true,
  isChangingCount: state.page.isDecrementing
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeCount: () => {
      dispatch(pageActions.decrementAsync())
    }
  }
}

const DecrementCountAsyncButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountButton)

export default DecrementCountAsyncButton
