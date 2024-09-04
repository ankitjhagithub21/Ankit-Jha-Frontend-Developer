import { useState, useEffect } from 'react';
import FilterModel from './FilterModel';
import { useSelector } from 'react-redux';

const FilterSection = () => {
  const {area} = useSelector(state=>state.app)
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

  return (
    <section>
      <div className='flex items-center gap-3 p-5 max-w-5xl mx-auto'>
        <button className='border rounded-full px-3 py-1' onClick={() => setIsModelOpen(true)}>Filter
        </button>
        <button>Sort By</button>
      </div>
      {isModelOpen && <FilterModel setIsModelOpen={setIsModelOpen} areas={areas} />}

    </section>
  );
};

export default FilterSection;
