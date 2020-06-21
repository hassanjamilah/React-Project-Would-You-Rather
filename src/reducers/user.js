import {RECEIVE_USERS} from '../actions/user'

export default function users (state=null, action){
    console.log(action.users)
    switch (action.type){
        
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}

