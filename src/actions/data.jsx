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

export function receiveData(data){
  return{
    type:'RECEIVED_DATA',
    data
  }
}
