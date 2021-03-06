import React from 'react'
import { connect } from 'react-redux'
import { handleToggleAnswer } from '../actions/question'
import { Redirect } from 'react-router-dom'
import Nav from './Nav'
import QuestionAnswered from './QuestionAnswered'

class QuestionDetail extends React.Component {
    state = {
        firstSelected: true, 
        submitRedirect:false
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
        //this.props.history.goBack()
        this.setState(()=>({
            submitRedirect:true
        }))
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
        if (this.state.submitRedirect === true){
            return <Redirect to='/home'/>
        }
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
        const { id, isAnswered, question} = this.props
        if (typeof question === 'undefined'){
            return(
                <div>
                <Nav/>
                <div>Error 401</div>
                <div>Can not find the question</div>
                </div>
            )
        }
        if (this.props.authedUser == null) {
            return (<Redirect to='/' />)
        }

        if (typeof question === 'undefined') {
            return (
                <div>
                    <Nav />
                    <div>Error 404</div>
                    <div>The required question is not exist</div>
                </div>
            )
        }
        
        if (isAnswered == false) {
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
                    <QuestionAnswered id={id} />

                </div>
            )
        }
    }
}

function MapStateToProps({ users, questions, authedUser }, props) {
    console.log('🍑🍑🍑🍑 The properties: ', window.location.pathname)
    const s = window.location.pathname;
    const id = s.replace('/question/', '')
    console.log('🍑🍑🍑🍑 The properties: ', id)
    if (authedUser == null) {
        return
    }
    const question = questions[id]
    if (typeof question === 'undefined'){
        return
    }

    //const { id } = props.match.params
   
    console.log('🥮 Question', question)
    var x = null
    console.log('🍫 authed user in q details: ', users[authedUser.id])
    var isAnswered = false;
    if (authedUser !== null) {
        x = users[authedUser.id].answers[id]

           
            const votes1 = question.optionOne.votes
            const votes2 = question.optionTwo.votes
            if (votes1.includes(authedUser.id) || votes2.includes(authedUser.id)){
                isAnswered = true
            }
      
    }
    


    return {
        id,
        authedUser,
        question: question,
        users,
        isAnswered: isAnswered

    }

}

export default connect(MapStateToProps)(QuestionDetail)