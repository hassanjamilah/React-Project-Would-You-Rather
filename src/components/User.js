import React, { Component } from 'react'
import { connect } from 'react-redux'
class User extends React.Component {

    render() {
        const { user } = this.props
        const answers = Object.keys(user.answers)
        const questions = Object.keys(user.questions)
        return (
            <div style={styles.coantiner}>
                <img src={user.avatarURL} style={styles.avatarImage}></img>
                <div style={styles.sumTextView}>{user.sum}</div>
                <div style={styles.infoTexts}>
                    <div style={{marginBottom:7}}><b>{user.name}</b></div>
                    <div>Number of question: {questions.length}</div>
                    <div style={{}}>Number of answers: {answers.length}</div>
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


export default User