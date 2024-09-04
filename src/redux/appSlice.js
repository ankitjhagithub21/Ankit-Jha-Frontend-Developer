import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    area:"indian",
    foodItems:[],
    selectedFoodId:null,
    sortOrder: 'asc',
    isLoading:false,
  },
  reducers: {
   
    setArea: (state, action) => {
      state.area = action.payload
    },
    setFoodItems: (state, action) => {
        state.foodItems = action.payload
    },
    setSelectedFoodId:(state,action) =>{
      state.selectedFoodId = action.payload
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setIsLoading:(state,action)=>{
      state.isLoading = action.payload
    }
  },
})

export const { setArea,setFoodItems,setSelectedFoodId,setSortOrder,setIsLoading } = appSlice.actions

export default appSlice.reducer