import { GoSearch } from "react-icons/go"


const Header = () => {
  return (
    <header className="shadow-lg py-3 md:px-5 px-2">
        <div className="container  rounded-lg mx-auto flex items-center justify-between gap-3">
            <img src="/logo.png" alt="swiggy logo" width={120}/>
            <div className="flex items-center bg-gray-200 px-4 py-3  rounded-lg lg:w-1/3 md:w-1/2 w-full">
                <input type="text" className="w-full bg-transparent outline-none" placeholder="Search for restaurant and food"/>
                <GoSearch size={20} />
            </div>
        </div>
    </header>
  )
}

export default Header
