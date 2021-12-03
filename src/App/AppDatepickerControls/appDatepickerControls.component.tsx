import { connect } from 'react-redux'

import {
  AppState,
} from '../app.interfaces'

import DatepickerControls from '../../_components/DatepickerControls/'

import { selectUseDateRange } from '../app.selectors'

const mapStateToProps = (state: AppState) => ({
  selectDateRange: selectUseDateRange(state),
})

const dispatchProps = {}

export default connect(
  mapStateToProps, 
  dispatchProps,
)(DatepickerControls)
