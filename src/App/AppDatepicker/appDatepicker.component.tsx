import { connect } from 'react-redux'

import {
  AppState,
} from '../app.interfaces'

import Datepicker from '../../_components/Datepicker/'

const mapStateToProps = (state: AppState) => ({})

const dispatchProps = {}

export default connect(
  mapStateToProps, 
  dispatchProps,
)(Datepicker)
