import { connect } from 'react-redux'
import pageActions from '../../pages/actions'
import CountButton from './CountButton'

const mapStateToProps = state => ({
  label: 'increment async', // refactor out so that the IncrementCountButton function creates the label
  secondary: true,
  isChangingCount: state.page.isIncrementing
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeCount: () => {
      dispatch(pageActions.incrementAsync())
    }
  }
}

const IncrementCountAsyncButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountButton)

export default IncrementCountAsyncButton
