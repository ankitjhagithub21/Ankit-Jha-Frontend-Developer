import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { setFoodItems } from '../redux/appSlice'

const FoodItems = () => {
    const { area, foodItems } = useSelector(state => state.app)
     const dispatch = useDispatch()
    useEffect(() => {
        const getFoodItems = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            const data = await response.json()
           dispatch(setFoodItems(data.meals))
        }
        getFoodItems()
    }, [area])

    return (
        <section className='mb-20'>
            <div className='grid max-w-5xl mx-auto p-5 lg:gap-10 gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
                {
                    foodItems.map((item) => {
                        return <FoodItem key={item.idMeal} item={item} />
                    })
                }
            </div>
        </section>
    )
}

export default FoodItems
