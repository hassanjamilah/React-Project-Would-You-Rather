import {RECEIVE_QUESTIONS, ADD_QUESTION, TOGGLE_ANSWER} from '../actions/question'

export default function  quesions (state={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]:action.question,
                ...action.quesion.id
            }

        case TOGGLE_ANSWER:
            if (action.answer === 'optionOne'){
                return {
                    ...state,
                    [action.quesitonID]:{
                        ...state[action.quesitonID],
                        optionOne:{
                            text:state[action.quesitonID].optionOne.text,
                            votes:state[action.quesitonID].optionOne.votes.concat([action.authedUser])
                        }
    
                    }
                }
            }else {
                return {
                    ...state,
                    [action.quesitonID]:{
                        ...state[action.quesitonID],
                        optionTwo:{
                            text:state[action.quesitonID].optionTwo.text,
                            votes:state[action.quesitonID].optionTwo.votes.concat([action.authedUser])
                        }
    
                    }
                }
            }
           
        default:
            return state
    }
}