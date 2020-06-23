import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'

class Question extends Component{
    render(){
        
        const {question, authedUser} = this.props
        if (authedUser === null){
            return (
                <Redirect to='/'/>
            )
        }
        return(
            <Link to={`/question/${question.id}`}>
                <div>
                    {question.author}
                    <div>{question.timestamp}</div>
                    <div>{question.id}</div>
                <div>{question.optionOne.text}</div>
                <div>{question.optionTwo.text}</div>
                </div>
            </Link>
        )
    }
}


function MapStateToProps({questions, users, authedUser},{id}){
    return {
        authedUser,
        question: questions[id]
    }
}
export default connect(MapStateToProps)(Question)

