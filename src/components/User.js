import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends React.Component {

    render() {
        const { user, questions} = this.props
        console.log('🏆 the questions are: ' , this.props.questions)
        const answers = Object.keys(user.answers)
        
        return (
            <div style={styles.coantiner}>
                <img src={user.avatarURL} style={styles.avatarImage}></img>
                <div style={styles.sumTextView}>{user.numAnswers + user.numQuesitons}</div>
                <div style={styles.infoTexts}>
                    <div style={{marginBottom:7}}><b>{user.name}</b></div>
                    <div>Number of question: {user.numQuesitons}</div>
                    <div style={{}}>Number of answers: {user.numAnswers}</div>
                </div>
            </div>

        )
    }
}

const styles = {
    coantiner: {
        backgroundColor: '#F0F0F0',
        width: 500,
        height: 75,

    },
    infoTexts:{
        marginTop:20,
        paddingTop:12,
        paddingLeft:10,
        marginLeft:30
    },
    avatarImage: {
        width: 50,
        height: 50,
        float: 'left',
        marginTop: 12,
        marginRight:20,
    },
    sumTextView: {
        float: 'right',
        paddingTop:30,
        marginRight:10
    }

}

function MapStateToProps({ users, questions, authedUser }, props) {
    console.log('🍗🍗🍗 The properties: ' , props.user)

    console.log('🍗🍗🍗🍗🍗 The properties: ', questions , props.user)
    const userID = props.user.id
    const keys = Object.keys(questions)
    var numQuesitons = 0 , numAnswers = 0
    keys.map((key)=>{
        const votes1 = questions[key].optionOne.votes
        const votes2 = questions[key].optionTwo.votes
        const author = questions[key].author
        if (author === userID){
            console.log('🍗🍗🍗🍗🍗 The properties: quesiton')
            numQuesitons = numQuesitons + 1
        }
        if (votes1.includes(userID) || votes2.includes(userID)){
            console.log('🍗🍗🍗🍗🍗 The properties: answer')
            numAnswers = numAnswers + 1
        }
        

    })
    console.log('🍗🍗🍗🍗🍗 The properties: ', numAnswers, numQuesitons)

    return {
         questions

    }

}


export default connect(MapStateToProps)(User)