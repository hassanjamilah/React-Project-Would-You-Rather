import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitQuestions } from '../actions/shared'
import Question from './Question'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'
class Home extends Component {

    showOnlyAnswered = true

    handleViewChange = (e) => {
        const x = e.target.value
        this.showOnlyAnswered = x === '1'
        this.forceUpdate()
    }
    render() {
        const { otherQuestions, answerdQuestions, authedUser } = this.props

        var viewQuestions = []
        if (this.showOnlyAnswered === true) {
            viewQuestions = answerdQuestions
        } else {
            viewQuestions = otherQuestions
        }
        //Kick out if the user is not logged in
        
        if (authedUser === null) {
            
            return (
                <Redirect to='/' />
            )
        }

        return (
            <div>
            <div><Nav/></div>
                <select onChange={this.handleViewChange}>
                    <option value='1'>Show Answered Questions</option>
                    <option value='2'>Show UnAnswered Questions</option>
                </select>

                <ul>
                    {
                        viewQuestions.map((q) => (
                            <li key={q.id}><Question id={q.id} /></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }) {
    const ids = Object.keys(questions)
    var answerdQuestions = []
    var otherQuestions = []
    ids.map((id) => {
        const question = questions[id]
        console.log()
        if (
            question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser)
        ) {

            answerdQuestions.push(question)
        } else {
            otherQuestions.push(question)
        }

    })
    console.log('answered questions: ', answerdQuestions)
    console.log('other questions', otherQuestions)
    return {
        questionsIds: Object.keys(questions),
        otherQuestions: otherQuestions,
        answerdQuestions: answerdQuestions,
        authedUser: authedUser,
        show1: true
    }
}

export default connect(mapStateToProps)(Home)