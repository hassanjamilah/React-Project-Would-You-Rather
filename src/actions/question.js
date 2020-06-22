import {_saveQuestion} from '../_DATA'

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
    alert('hassan1')
    return (dispatch, getState) => {
        const authedUser = getState()
        return _saveQuestion({
            author: 'johndoe',
            optionOneText,
            optionTwoText
        })
        .then((question)=>{
            alert(question)
            dispatch(addQuestion(question))
        })

    }
}



