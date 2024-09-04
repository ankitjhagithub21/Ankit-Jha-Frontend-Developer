import React from 'react'

const FoodItem = ({ item }) => {
    const {idMeal, strMeal, strMealThumb} = item
    return (
        <div className='hover:scale-95 cursor-pointer transition-all duration-500'>
            <img src={strMealThumb} alt={strMeal} loading='lazy' className='w-full rounded-lg' />
            <h2 className='lg:text-lg text-sm mt-1 text-gray-800 font-bold'>{strMeal}</h2>
        </div>
    )
}

export default FoodItem
