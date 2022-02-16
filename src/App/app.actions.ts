import * as ACTIONS from "./app.actionTypes"
import * as TYPES from "./app.interfaces"

export const setDateAttributes = (payload: TYPES.ISetDatePayload): TYPES.ISetDate => ({
  type: ACTIONS.SET_DATE_ATTRIBUTES,
  payload,
})