import {_saveQuestion, formatQuestion} from '../_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }

}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion( optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const authedUser = getState().authedUser
        return _saveQuestion({
            author:authedUser,
            optionOneText,
            optionTwoText

        })
        .then((question)=>{
            console.log('receive question:' , question)
            dispatch(addQuestion(question))
        })

    }
}



