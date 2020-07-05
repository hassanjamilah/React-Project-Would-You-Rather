import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect, Link} from 'react-router-dom'
import Temp from './Temp'

class Login extends Component {    
    selectedUserId = 0
    
   
    handleSelectUserChange = (e) => {
        const id = e.target.value
        console.log('🥙 ' , this.props.users[id])
       this.selectedUserId = e.target.value
       
    }

    handleLogin = (e)=> {
        const {users} = this.props
        if (this.selectedUserId == 0){
            const keys = Object.keys(users)
            this.selectedUserId = users[keys[0]].id
            console.log('selected the first user' , users[keys[0]].id)

        }
        console.log(this.selectedUserId)
        this.props.dispatch (setAuthedUser(this.selectedUserId))
   }
    render() {
        const { usersIds, users, authedUser } = this.props
       

        if (authedUser  != null){
            
            return <Redirect to='/home'/>
        }

        return (
            
            <div>
               
                <select onChange={this.handleSelectUserChange}
                className="box"
                >
                    {
                        usersIds.map((id) => (
                            <option key={id} value={id}>{users[id].name}</option>
                        ))
                    }
                </select>
                <button onClick={this.handleLogin} className="btn-login">Login</button>
               
            </div>
            
        )
    }
}


function mapStateToProps({ users , authedUser}) {
    return {
        usersIds: Object.keys(users),
        users: users, 
        authedUser: authedUser
    }
}
export default connect(mapStateToProps)(Login)