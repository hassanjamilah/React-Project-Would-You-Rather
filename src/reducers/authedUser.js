import {SET_AUTHED_USER, setAuthedUser} from '../actions/authedUser'

export default function authedUser(state=null, action){
    switch (action.type){
        case SET_AUTHED_USER:
            const id = action.id
            const imageURL = action.imageURL
            if (id == null){
                
                return null
            }
            return {
                id,
                imageURL

            }
        default:
            return state
    }

}
