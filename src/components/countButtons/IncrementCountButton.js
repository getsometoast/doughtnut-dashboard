import { connect } from 'react-redux'
import pageActions from '../../pages/actions'
import CountButton from './CountButton'

const mapStateToProps = state => ({
  label: 'increment', // refactor out so that the IncrementCountButton function creates the label
  primary: true,
  isChangingCount: state.page.isIncrementing
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeCount: () => {
      dispatch(pageActions.increment())
    }
  }
}

const IncrementCountButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountButton)

export default IncrementCountButton
