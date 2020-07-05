import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

class QuestionAnswered extends Component {
    render() {
        const { question, authedUser, users, usersCount, optionOneVotes, optionTwoVotes } = this.props
        if (typeof question === 'undefined'){
            return(
                <div>
                    Error 404
                    <p>The question not found</p>
                </div>
                
            )
        }
        if (authedUser === null) {
            return (
                <Redirect to='/' />
            )
        }
        return (
         
                <div
                    style={styles.containerMain}
                >
                    <div >
                        <div
                            style={styles.container}
                        >
                            <span style={{marginLeft:30,paddingTop:4,height:10,fontWeight:'700'}}>{users[question.author].name}</span>
                        </div>
                        <img
                            src={users[question.author].avatarURL}
                            style={styles.avatarImage}
                        ></img>
                        <div style={{ paddingTop:10}}>
                            <div 
                                style={
                                   this.props.optionOneSelected ?  styles.optionTextSelected:styles.optionText
                            }>
                                {question.optionOne.text}
                                <p>Percent of people Votes Percent: {(optionOneVotes/usersCount*100).toFixed(2)}%       {optionOneVotes}/{usersCount}</p>
                                <p>Number of people voted:  {optionOneVotes}/{usersCount}</p>
                            </div>
                            <div
                            style={
                                   this.props.optionOneSelected ?  styles.optionText:styles.optionTextSelected
                            }
                            >{question.optionTwo.text}
                            <p>Votes Percent: {(optionTwoVotes/usersCount*100).toFixed(2)}%        {optionTwoVotes}/{usersCount}</p>
                            </div>
                           
                            
                        </div>
                    </div>

                </div>
            
        )
    }
}


function MapStateToProps({ questions, users, authedUser }, { id }) {
    const usersCount = Object.keys(users).length
    console.log('💊 ' , questions[id].optionOne.votes, authedUser)
    console.log('💊 ' , questions[id].optionOne.votes.includes(authedUser.id))
    const optionOneVotes = questions[id].optionOne.votes.length
    const optionTwoVotes = questions[id].optionTwo.votes.length
    const optionOneSelected = questions[id].optionOne.votes.includes(authedUser.id)
    return {
        authedUser,
        question: questions[id],
        users,
        usersCount,
        optionOneSelected,
        optionOneVotes,
        optionTwoVotes
    }
}

const styles = {
    container:{
        backgroundColor:'#DCDCDC',
        width:500,
        height:50,
        paddingTop:10
      
    },
    containerMain:{
        backgroundColor: '#F0F0F0',
        height: 300,
        width: 500,
        margin:10
    } ,
    avatarImage: {
        width: 50,
        height: 50,
        float: 'left',
        marginTop: 70,
        marginLeft: 20,
        marginRight: 20
    },
    optionText:{
        margin:10,
       backgroundColor:'#E8E8E8',
        width:350,
        height:90,
        marginLeft:110,
        paddingTop:10,
        paddingLeft:10
    },   
    optionTextSelected:{
        margin:10,
        backgroundColor:'#66CDAA',
        width:350,
        height:90,
        marginLeft:110,
        paddingTop:10,
        paddingLeft:10
    }
}
export default connect(MapStateToProps)(QuestionAnswered)

