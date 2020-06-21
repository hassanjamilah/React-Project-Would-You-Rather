import {_getQuestions, _getUsers} from '../_DATA'
import {receiveQuestions} from '../actions/question'
import {setAuthedUser} from '../actions/authedUser'
import {receiveUsers} from '../actions/user'

export function handleInitData(){
    return (dispatch) => {
        return _getUsers()
        .then(
            
            (users) => {
                console.log(users[0])
                dispatch(receiveUsers(users))
            }
        )
    }
}