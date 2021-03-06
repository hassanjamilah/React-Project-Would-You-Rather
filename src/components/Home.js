import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitQuestions } from '../actions/shared'
import Question from './Question'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'
class Home extends Component {

    showOnlyAnswered = false

    handleViewChange = (e) => {
        const x = e.target.value
        this.showOnlyAnswered = x === '1'
        this.forceUpdate()
    }
    render() {
        const { otherQuestions, answerdQuestions, authedUser } = this.props
       
        if (authedUser === null || typeof authedUser === 'undefined') {
            return (
                <Redirect to='/' />
            )
        }
       

        var viewQuestions = []
        if (this.showOnlyAnswered === true) {
            viewQuestions = answerdQuestions
        } else {
            viewQuestions = otherQuestions
        }
        //Kick out if the user is not logged in
      

        return (
            <div>
                <div><Nav /></div>
                <select onChange={this.handleViewChange}
                    style={{
                        fontSize: 18,
                        margin: 20,

                    }}
                >
                    <option value='2'>Show UnAnswered Questions</option>
                    <option value='1'>Show Answered Questions</option>

                </select>

                <ul
                >
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

    if (authedUser == null){
        return
    }
    const ids = Object.keys(questions)
    var answerdQuestions = []
    var otherQuestions = []
    ids.map((id) => {
        const question = questions[id]
        console.log('🧃 ', question)
        if (
            question.optionOne.votes.includes(authedUser.id) ||
            question.optionTwo.votes.includes(authedUser.id)
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
        otherQuestions: otherQuestions.sort((a,b) => b.timestamp - a.timestamp),
        answerdQuestions: answerdQuestions.sort((a,b) => b.timestamp - a.timestamp),
        authedUser: authedUser,
        show1: true
    }
}

export default connect(mapStateToProps)(Home)