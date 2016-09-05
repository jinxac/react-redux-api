import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/data'


class App extends Component{

  _printData(data){
    return data.map( data => {
      return(
        <p>{data.title}</p>
      )
    })
  }

  render(){
    const { data,onClick }= this.props;
    return(
      <div>
        <button onClick={e=>{
            e.preventDefault()
            onClick()
          }}>Click me</button>
        <div>{this._printData(data)}</div>
      </div>

    );
  }
}

function mapStateToProps(state){
    const {data} = state.data
    return{
      data
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      //dispatching action for getting data from API and updating state
      dispatch(fetchData("https://jsonplaceholder.typicode.com/posts"));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
