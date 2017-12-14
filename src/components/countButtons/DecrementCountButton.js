import { connect } from 'react-redux'
import pageActions from '../../pages/actions'
import CountButton from './CountButton'

const mapStateToProps = state => ({
  label: 'decrement', // refactor out so that the IncrementCountButton function creates the label
  primary: true,
  isChangingCount: state.page.isDecrementing
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeCount: () => {
      dispatch(pageActions.decrement())
    }
  }
}

const DecrementCountButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountButton)

export default DecrementCountButton
