import {changeNumber} from './update'

import { combineReducers } from 'redux'

const rootReducer=combineReducers({
    changeNumber:changeNumber
})

export default rootReducer