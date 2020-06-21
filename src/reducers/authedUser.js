import {SET_AUTHED_USER, setAuthedUser} from '../actions/authedUser'

export default function authedUser(state=null, action){
    switch (action.type){
        case SET_AUTHED_USER:
            return action.id
        default:
            return state
    }

}
