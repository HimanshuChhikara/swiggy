const SearchBar = () => {

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                    className="border border-solid border-black"
                    type="text"
                    placeholder="Search.." />
                    <button  className="px-4 py-2 bg-blue-100 m-4 rounded-lg" >Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;