const intialState=10

export  const changeNumber= (state=intialState,action )=>{
switch(action.type){
    case "INCREAMENT": return state +1;
    case "DECREMENT": return state +1;
    default: return state;
}
}

