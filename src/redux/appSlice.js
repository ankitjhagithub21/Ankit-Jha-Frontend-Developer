import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    area:"indian",
    foodItems:[],
    selectedFoodId:null,
    sortOrder: 'asc'
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
  },
})

export const { setArea,setFoodItems,setSelectedFoodId,setSortOrder } = appSlice.actions

export default appSlice.reducer