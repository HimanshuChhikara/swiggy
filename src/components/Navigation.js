const Navigation = () => {
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div>Logo</div>
            <div  className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Home</li>
                    <li className="px-4">About Us</li>
                    <li className="px-4">Contact Us</li>
                    <li className="px-4">Grocery</li>
                    <li className="px-4">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;