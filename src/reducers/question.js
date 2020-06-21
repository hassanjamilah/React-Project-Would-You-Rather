import {RECEIVE_QUESTIONS} from '../actions/question'

export default function  quesions (state={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}