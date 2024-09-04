import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { setSelectedFoodId } from '../redux/appSlice';

const FoodItem = ({ item }) => {
    const {idMeal, strMeal, strMealThumb} = item
    const randomRating = (Math.random() * 4 + 1).toFixed(1);
    const dispatch = useDispatch()
    const handleClick = () => {
      dispatch(setSelectedFoodId(item.idMeal))
    }
    
    return (
        <div className='hover:scale-95 cursor-pointer transition-all duration-500' onClick={handleClick}>
            <img src={strMealThumb} alt={strMeal} loading='lazy' className='w-full rounded-lg' />
            <h2 className='lg:text-lg text-sm mt-1 text-gray-800 font-bold'>{strMeal.slice(0,20)}</h2>
          <div className='flex items-center gap-1'>
          <button className='bg-green-600 rounded-full p-1'>
                <BsStarFill size={12} color='white'/>
                
            </button>
            <span className='font-bold text-lg'>{randomRating}</span>
          </div>
        </div>
    )
}

export default FoodItem
