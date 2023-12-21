import Lottie from 'lottie-react';
import errorLogo from "../../../public/errorAnime.json"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='max-h-[100vh] text-center'>
            <div className=' w-[650px] mx-auto'>
            <Lottie animationData={errorLogo}></Lottie>
            </div>
            <Link to={'/'}><button className='btn btn-secondary text-white font-bold'>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;