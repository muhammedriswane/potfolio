import { createSlice } from '@reduxjs/toolkit'

export const dataslice=createSlice({
    name:'projectdata',
    initialState:{value:[]},
    reducers:{
        adddata:(state,action)=>{
            // console.log(action.payload.id,'0------');
            state.value.push(action.payload)
        },
        deletpro:(state,action)=>{
            state.value=action.payload
            
            console.log(state.value,'=========');
            // state.value.slice()
            // if(state.value===1){
            //     state.value =  state.value.find((value)=> value.id !== 1 )
            // }
        }
        
           
            
    }
})

export const {adddata,deletpro}=dataslice.actions
export default dataslice.reducer