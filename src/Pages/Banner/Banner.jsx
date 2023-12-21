import Lottie from "lottie-react";
import animeLogo from "../../../public/Animation - 1703152969413.json"
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="flex-1 text-center">
                <h1 className="text-violet-700 font-bold text-center text-5xl">Manage your tasks, <br /> master your destiny</h1>
                <h1 className="text-black text-center mt-2">Progress lies in the completion of tasks, not just in their existence. Success is the sum of small efforts repeated day in and day out.</h1>
<Link to={'/login'}>
<button className="btn btn-primary text-xl font-semibold mt-3">Let's Explore</button>
</Link>
            </div>
            <div className='flex-1'>
            <Lottie animationData={animeLogo}></Lottie>
            </div>
        </div>
    );
};

export default Banner;