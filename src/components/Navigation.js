import { Link } from "react-router-dom";

const Navigation = () => {
    console.log("Navigation Render ")
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div>Logo</div>
            <div  className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link></li>
                    <li className="px-4">
                        <Link to="/contactUs">Contact Us</Link></li>
                    <li className="px-4">Grocery</li>
                    <li className="px-4">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;