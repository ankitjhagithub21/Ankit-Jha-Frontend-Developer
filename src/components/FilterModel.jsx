import {useState} from "react"
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setArea } from "../redux/appSlice"

const FilterModel = ({setIsModelOpen,areas}) => {
    const [selectedArea, setSelectedArea] = useState('');
    const dispatch = useDispatch();
    const applyFilter = () => {
        dispatch(setArea(selectedArea));
        setIsModelOpen(false);
    };

    const handleChange = (event) => {
        setSelectedArea(event.target.value);
    };


   

    return (
        <div className={`fixed w-full overlay h-full p-5 flex items-center z-50 top-0 left-0 justify-center`}>
            <div className=' w-fit flex flex-col items-start bg-white flex-wrap shadow-lg rounded-lg p-5'>
                <div className='flex items-center justify-between w-full mb-5'>
                    <h1 className='font-bold text-xl'>Filter By Area</h1>
                    <button className='rounded-full shadow-xl p-2' onClick={() => setIsModelOpen(false)}>
                        <X size={16} />
                    </button>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-2'>
                    {areas.map((area, index) => (
                        <div className='flex items-center gap-2 text-lg' key={index}>
                            <input
                                type="radio"
                                name="area"
                                value={area.strArea}
                                onChange={handleChange}
                                id={area.strArea}
                            />
                            <label htmlFor={area.strArea}>{area.strArea}</label>
                        </div>
                    ))}
                </div>
                <button className='text-[#FF650F] text-lg font-bold mt-5' onClick={applyFilter}>Apply</button>

            </div>

        </div>
    )
}

export default FilterModel
