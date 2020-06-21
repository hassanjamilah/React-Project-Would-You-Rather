import React from 'react';
import {handleInitData, handleInitQuestions} from '../actions/shared'
import {connect} from 'react-redux'
import Login from './Login'
import Home from './Home'
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
            <Route path='/home' component={Home}/>
          </div>
          }
        </div>

      </Router>
      

    )
  }
}

function mapStateToProps({users}){
  return {
    loading: users === null
  }
}


export default connect(mapStateToProps)(App);
