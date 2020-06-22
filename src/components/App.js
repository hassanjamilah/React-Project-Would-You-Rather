import React from 'react';
import {handleInitData, handleInitQuestions} from '../actions/shared'
import {connect} from 'react-redux'
import Login from './Login'
import Home from './Home'
import Leaderboard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import {Redirect} from 'react-router-dom'

import {BrowserRouter as Router, Route} from 'react-router-dom'
class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(handleInitData())
    this.props.dispatch(handleInitQuestions())
  }
  render(){
  
    return (
      <Router>
        
        <div>
          
          {
            this.props.loading === true ? 
          <div>Loading...</div> :
          
          <div>
            <Route path='/' exact component={Login}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/Leaderboard' component={Leaderboard}/>
            <Route path='/NewQuestion' component={NewQuestion}/>
          </div>
          }
        </div>

      </Router>
      

    )
  }
}

function mapStateToProps({users, authedUser}){
  return {
    loading: users === null,
    authedUser
  }
}


export default connect(mapStateToProps)(App);
