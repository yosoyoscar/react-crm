import { combineReducers } from 'redux'
import customer from '../features/components/customer/reducers'

const rootReducer = combineReducers({
    customer,
})

export default rootReducer