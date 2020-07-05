import React from 'react'
import { connect } from 'react-redux'
import { handleToggleAnswer } from '../actions/question'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'

class QuestionDetail extends React.Component {
    state = {
        firstSelected: true
    }

    radioSelected = (value) => {
        var newValue = false
        value == 1 ? newValue = true : newValue = false
        this.setState(() => ({
            firstSelected: newValue
        }))
    }

    handleSumbit = (e) => {
        
        e.preventDefault()
        const { id, authedUser } = this.props
        
        this.props.dispatch(handleToggleAnswer(id, 'optionOne'))

    }

    checkIfIsAnsweredQuestion = () => {

    }

    OptionButtons = () => {
        const { firstSelected } = this.state
        const {question} = this.props
        console.log('🍭 question: ' , question.optionOne.text)
        return (
            <div>
                <form>
                    <div><input type='radio'
                        onChange={() => this.radioSelected(1)}
                        checked={firstSelected}></input>{question.optionOne.text}</div>
                    <div><input type='radio'
                        onChange={() => this.radioSelected(2)}
                        checked={!firstSelected}></input>{question.optionTwo.text}</div>
                </form>
            </div>
        )
    }


    render() {
        const { id, isAnswered } = this.props
        if (this.props.authedUser == null) {
            return (<Redirect to='/' />)
        }
        console.log("The quesiton is answered: ", this.checkIfIsAnsweredQuestion())
        if (isAnswered == null) {
            return (
                <div >
                    {id}
                    <Nav/>
                    <this.OptionButtons />
                    <form>
                        <button onClick={this.handleSumbit}>Submit answer</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div >
                    <Nav/>
                    <div>{isAnswered}</div>
                </div>
            )
        }
    }
}

function MapStateToProps({ users, questions, authedUser }, props) {
    
    if (authedUser == null) {
        return
    }
    const { id } = props.match.params
    const question = questions[id]
    console.log('🥮 Question' , question) 
    var x = null
    console.log('🍫 authed user in q details: ', users[authedUser.id])
    if (authedUser !== null) {
        x = users[authedUser.id].answers[id]
    }



    return {
        id,
        authedUser,
        question: question,
        users,
        isAnswered: x

    }

}

export default connect(MapStateToProps)(QuestionDetail)