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
    alert('hassan1')
    return (dispatch, getState) => {
        const authedUser = getState()
        //const x = formatQuestion('hassan' , 'jamila','johndoe')
        //console.log('will add question:' , x)
        return _saveQuestion({
            author:authedUser,
            optionOneText,
            optionTwoText

        })
        .then((question)=>{
            console.log('receive question:' , question)
            alert(question)
            dispatch(addQuestion(question))
        })

    }
}



