const initialState={
  isFetching : false,
  data:[],
}


export default function dataInfo(state=initialState,action){
  switch(action.type){
    case 'REQUEST_DATA':
      return Object.assign({},state,{isFetching:true});

    case 'RECEIVED_DATA':
      console.log("heyo kirat"+JSON.stringify(action.data));
      return Object.assign({},state,{isFetching:false,data:action.data});
    default:
      return initialState
  }
}
