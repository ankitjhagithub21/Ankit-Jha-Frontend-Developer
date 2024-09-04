import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { setFoodItems } from '../redux/appSlice';
import FoodModel from './FoodModel';

const FoodItems = () => {
  const { area, foodItems, selectedFoodId, sortOrder } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  useEffect(() => {
    const getFoodItems = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const data = await response.json();
      dispatch(setFoodItems(data.meals));
      setCurrentPage(1); // Reset to first page on area change
    };
    getFoodItems();
  }, [area]);

  // Sort food items alphabetically based on the meal name
  const sortedItems = [...foodItems].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.strMeal.localeCompare(b.strMeal);
    } else {
      return b.strMeal.localeCompare(a.strMeal);
    }
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  return (
    <section className='mb-20'>
      <div className='grid max-w-5xl mx-auto lg:gap-10 gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
        {currentItems.map((item) => (
          <FoodItem key={item.idMeal} item={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center mt-5'>
        <button 
          className={`px-4 py-2 mx-1 text-white rounded-lg ${currentPage === 1 ? 'bg-gray-400' : 'bg-green-600'}`} 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='px-4 py-2  mx-1'>{`Page ${currentPage} of ${totalPages}`}</span>
        <button 
          className={`px-4 py-2 mx-1 text-white rounded-lg ${currentPage === totalPages ? 'bg-gray-400' : 'bg-green-600'}`} 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {selectedFoodId && <FoodModel />}
    </section>
  );
};

export default FoodItems;
