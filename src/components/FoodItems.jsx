import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { setFoodItems } from '../redux/appSlice'
import FoodModel from './FoodModel'

const FoodItems = () => {
    const { area, foodItems, selectedFoodId } = useSelector(state => state.app)
    const dispatch = useDispatch()

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    useEffect(() => {
        const getFoodItems = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            const data = await response.json()
            dispatch(setFoodItems(data.meals))
        }
        getFoodItems()
    }, [area])

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(foodItems.length / itemsPerPage)

    return (
        <section className='min-h-screen pb-12'>
            <div className='grid max-w-5xl mx-auto p-5 lg:gap-10 gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
                {
                    currentItems.map((item) => {
                        return <FoodItem key={item.idMeal} item={item} />
                    })
                }
            </div>
            <div className='flex justify-center mt-5'>
                <button 
                    className={`px-4 py-2 text-white mx-1 rounded-lg ${currentPage === 1 ? 'bg-gray-400' : 'bg-green-600'}`} 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className='px-4 py-2'>{currentPage} of {totalPages}</span>
                <button 
                    className={`px-4 py-2 text-white mx-1 rounded-lg ${currentPage === totalPages ? 'bg-gray-400' : 'bg-green-600'}`} 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
            {
                selectedFoodId && <FoodModel />
            }
        </section>
    )
}

export default FoodItems
