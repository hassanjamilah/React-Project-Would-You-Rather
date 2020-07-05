import React from 'react'
import { connect } from 'react-redux'
import { handleToggleAnswer } from '../actions/question'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'
import QuestionAnswered from './QuestionAnswered'

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
        this.props.history.goBack()

    }


    OptionButtons = () => {
        const { firstSelected } = this.state
        const { question } = this.props
        console.log('🍭 question: ', question.optionOne.text)
        const style = {
            marginTop: 20,
            marginLeft: 45,
        }
        const buttonStyle = {
            marginRight: 10,
            width: 150,
            height: 30,
            float: 'right',
            borderColor: 'black',
            color: 'white',
            backgroundColor: '#008080',
            borderWidth: 3,
            fontSize: 16,
            marginTop: 15,
        }
        return (
            <div>
                <form>
                    <div style={style}><input type='radio'
                        onChange={() => this.radioSelected(1)}
                        checked={firstSelected}></input>{question.optionOne.text}</div>
                    <div style={style}><input type='radio'
                        onChange={() => this.radioSelected(2)}
                        checked={!firstSelected}></input>{question.optionTwo.text}</div>
                    <button style={buttonStyle} onClick={this.handleSumbit}>Submit answer</button>
                </form>
            </div>
        )
    }

    AuthorView = () => {
        const { users, question } = this.props
        const user = users[question.author]
        return (
            <div
                style={{
                    float: 'left',
                    backgroundColor: '#F0F0F0',
                    width: 500,
                    height: 150,
                    verticalAlign: 'middle',
                    marginLeft: 20,

                }}>
                <div style={{
                    width: 500,
                    height: 20,
                    backgroundColor: '#E0E0E0',
                    paddingTop: 6,

                }}>
                    {user.name}
                </div>
                <img
                    src={user.avatarURL}
                    style={{
                        width: 50,
                        height: 50,
                        float: "left",
                        marginTop: 27,

                    }}
                ></img>
                <this.OptionButtons />
            </div>
        )
    }


    render() {
        const { id, isAnswered } = this.props
        if (this.props.authedUser == null) {
            return (<Redirect to='/' />)
        }
        
        if (isAnswered == null) {
            return (
                <div >
                    <Nav />
                    <this.AuthorView />
                </div>
            )
        } else {
            return (
                <div >
                    <Nav />
                    <QuestionAnswered id={id}/>
                   
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
    console.log('🥮 Question', question)
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