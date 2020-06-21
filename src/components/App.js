import React from 'react';
import {handleInitData} from '../actions/shared'
import {connect} from 'react-redux'
import Login from './Login'
class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(handleInitData())
  }
  render(){
    return (
      <div>
       
        {
          this.props.loading === true ? 
          <div>Loading...</div> :
          <Login/>
        }
       
      </div>
    )
  }
}

function mapStateToProps({users}){
  return {
    loading: users === null
  }
}


export default connect(mapStateToProps)(App);
