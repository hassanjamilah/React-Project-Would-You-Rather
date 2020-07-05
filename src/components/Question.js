import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

class Question extends Component {
    render() {

        const { question, authedUser, users } = this.props
        if (authedUser === null) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <Link to={`/question/${question.id}`}>
                <div
                    style={{
                        backgroundColor: '#F0F0F0',
                        height: 170,
                        width: 500,
                    }}
                >
                    <div >
                        <div
                            style={{
                                backgroundColor:'#DCDCDC',
                                width:500,
                                height:40,
                                paddingTop:20
                              
                            }}
                        >
                            <span style={{marginLeft:30,paddingTop:5,height:10,fontWeight:'700'}}>{users[question.author].name}</span>
                        </div>
                        <img
                            src={users[question.author].avatarURL}
                            style={{
                                width: 50,
                                height: 50,
                                float: 'left',
                                marginTop: 25,
                                marginLeft: 20,
                                marginRight: 20

                            }}
                        ></img>
                        <div style={{ paddingTop:3}}>
                            <h2 >Would you rather?</h2>
                            <h4>{question.optionOne.text}</h4>
                            
                        </div>
                    </div>

                </div>
            </Link>
        )
    }
}


function MapStateToProps({ questions, users, authedUser }, { id }) {
    return {
        authedUser,
        question: questions[id],
        users
    }
}

const styles = {
    questionCard: {

    }
}
export default connect(MapStateToProps)(Question)

