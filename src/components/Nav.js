import React , {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

import {Link, Redirect, NavLink} from 'react-router-dom'

class Nav extends Component{
    handleLogout = (e) => {
        alert ('logout')
      this.props.dispatch(setAuthedUser(null))
        
    }

    render(){
        const {authedUser} = this.props
        return(
            <div>
                <button>Home</button>
                <button>New Question</button>
                <button>Leaderboard</button>
                <div>{authedUser}</div>
                <NavLink to='/NewQuestion'>New Question</NavLink>
                <button onClick={this.handleLogout}>Logout</button>
                
          
          
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Nav)