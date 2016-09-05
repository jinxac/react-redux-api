const initialState={
  isFetching : false,
  data:[],
}


export default function dataInfo(state=initialState,action){
  switch(action.type){
    case 'REQUEST_DATA':
      //Assigning isFetching is true for marking API call has started
      return Object.assign({},state,{isFetching:true});

    case 'RECEIVED_DATA':
     /*Once API call is complete:-
      1.Updating state with the data.
      2.Making isFetching false
     */
      return Object.assign({},state,{isFetching:false,data:action.data});
    default:
      return initialState
  }
}
