import {combineReducers} from 'redux'
import questions from './question'
import users from './user'
import authedUser from './authedUser'


export default combineReducers({
    users,
    questions,
    authedUser
})