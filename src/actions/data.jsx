//Action to be dispatched before API call is complete
export function requestData(){
  return{
    type:'REQUEST_DATA'
  }
}


export function fetchData(url){
  return(dispatch,getState)=>{
      dispatch(requestData());
      return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveData(json));
      })
  }
}

//Action to be dispatched after API call is complete
export function receiveData(data){
  return{
    type:'RECEIVED_DATA',
    data
  }
}
