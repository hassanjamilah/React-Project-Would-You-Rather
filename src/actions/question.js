import {_saveQuestion, _saveQuestionAnswer} from '../_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }

}

function addQuestion(question){
    console.log('🍎🍎🍎🍎🍎 receive question in add question:' , question)
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion( optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const authedUser = getState().authedUser.id
       _saveQuestion({
            author:authedUser,
            optionOneText,
            optionTwoText

        })
        .then((question)=>{
            console.log('🍎🍎🍎🍎🍎 receive question:' , question)
            dispatch(addQuestion(question))
        })

    }
}


function toggleAnswer(quesitonID, answer, authedUser){
    
    return {
        type: TOGGLE_ANSWER,
        quesitonID,
        answer,
        authedUser
    }
}

export function handleToggleAnswer(id, answer){
    return (dispatch, getState) => {
        const authedUser =  getState().authedUser
      
        console.log('Submit answer:' , id , answer, 'johndoe')
        dispatch(toggleAnswer(id, answer, authedUser.id))
        return _saveQuestionAnswer({
            authedUser:authedUser,
            qid:id,
            answer:answer
        }
            )
            .catch((e) => {
                alert(e)
            })

    }
}