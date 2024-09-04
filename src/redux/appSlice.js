import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    area:"indian",
    foodItems:[]
  },
  reducers: {
   
    setArea: (state, action) => {
      state.area = action.payload
    },
    setFoodItems: (state, action) => {
        state.foodItems = action.payload
      },
  },
})

export const { setArea,setFoodItems } = appSlice.actions

export default appSlice.reducer