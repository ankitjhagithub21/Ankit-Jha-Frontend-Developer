import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    area:"indian",
    foodItems:[],
    selectedFoodId:null
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
    }
  },
})

export const { setArea,setFoodItems,setSelectedFoodId } = appSlice.actions

export default appSlice.reducer