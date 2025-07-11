import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name:"fortasks",
    initialState:[],
    reducers:{
        addTask:(state,action)=>
        {
            state.push(action.payload);
        },
        deleteTask:(state,action)=>
        {
            return state.filter((_,index)=>index!==action.payload);
        }
    }
  
})

export const {addTask , deleteTask} = taskSlice.actions;

export default taskSlice.reducer;
