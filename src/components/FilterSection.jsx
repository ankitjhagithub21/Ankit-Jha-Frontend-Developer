import { useState, useEffect } from 'react';
import FilterModel from './FilterModel';
import { useSelector, useDispatch } from 'react-redux';
import { setArea, setSortOrder } from '../redux/appSlice';

const FilterSection = () => {
  const dispatch = useDispatch();
  const { area, sortOrder } = useSelector(state => state.app);
  const [areas, setAreas] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    const fetchFoodAreas = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=${area}`);
        const data = await response.json();
        setAreas(data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoodAreas();
  }, [area]);

  const handleAreaSelect = (selectedArea) => {
    dispatch(setArea(selectedArea));
    setIsModelOpen(false);
  };

  const handleSortChange = (event) => {
    dispatch(setSortOrder(event.target.value));
  };

  return (
    <section>

      <div className='max-w-5xl mx-auto py-5'>
        <h1 className='mb-2 text-2xl font-bold'>Top {area} Food</h1>
        <div className='flex gap-5'>
          <button
            className='flex items-center border rounded-full px-3 py-1'
            onClick={() => setIsModelOpen(true)}
          >
            Filter


          </button>

          {/* Sort By dropdown */}
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className='border rounded-full px-3 py-1'
          >
            <option value="asc">Sort A-Z</option>
            <option value="desc">Sort Z-A</option>
          </select>
        </div>

      </div>

      {isModelOpen && (
        <FilterModel
          setIsModelOpen={setIsModelOpen}
          areas={areas}
          
        />
      )}
    </section>
  );
};

export default FilterSection;
