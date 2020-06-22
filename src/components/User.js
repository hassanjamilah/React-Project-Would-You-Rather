import React , {Component} from 'react'
import {Component, connect} from 'react-redux'
class User extends React.Component{
    render(){
        return (
            <div>user</div>
        )
    }
}

function mapStateToProps({users, questionIDs},{id}){

}

export default connect(mapStateToProps)(User)