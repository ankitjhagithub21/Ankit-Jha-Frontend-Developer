import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedFoodId } from '../redux/appSlice'
import { MdClose } from 'react-icons/md'
import Loader from './Loader'

const FoodModel = () => {
    const { selectedFoodId } = useSelector(state => state.app)
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        const getFoodById = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedFoodId}`)
                const data = await response.json()
                setMeal(data.meals[0])
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getFoodById()
    }, [selectedFoodId])

    if (loading) {
        return <Loader />
    }


    const {
        strMeal,
        strMealThumb,
        strCategory,
        strArea,
        strInstructions,
        strYoutube,
    } = meal

    // Helper to format and display ingredients
    const getIngredients = () => {
        let ingredients = []
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`]
            const measure = meal[`strMeasure${i}`]
            if (ingredient) {
                ingredients.push(`${ingredient} - ${measure}`)
            }
        }
        return ingredients
    }

    return (
        <section className='fixed top-0 left-0 w-full flex items-center justify-center overlay overflow-scroll rounded-lg p-5'>
            <button className='absolute top-2 right-2 bg-white shadow rounded-full p-2' onClick={() => dispatch(setSelectedFoodId(null))}>
                <MdClose size={20} />
            </button>
            <div className='lg:w-1/2 w-full p-5 h-screen overflow-scroll rounded-lg shadow-lg bg-white'>

                <h2 className='text-2xl font-bold mb-3'>{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} className='rounded-lg w-full h-80 object-cover  mb-4' />

                <div className='text-gray-700 mb-4'>
                    <p><strong>Category:</strong> {strCategory}</p>
                    <p><strong>Area:</strong> {strArea}</p>
                </div>

                <div className='text-gray-700 mb-4'>
                    <h3 className='font-bold text-lg mb-2'>Ingredients:</h3>
                    <ul className='list-disc list-inside'>
                        {getIngredients().map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div className='text-gray-700'>
                    <h3 className='font-bold text-lg mb-2'>Instructions:</h3>
                    <p>{strInstructions}</p>
                </div>

                {strYoutube && (
                    <div className='mt-4'>
                        <a href={strYoutube} target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
                            Watch on YouTube
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}

export default FoodModel
