import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className="flex">
            <div className=" bg-violet-200 h-[100vh] w-[25vh]">
                <Link to={'/'}>
                <button className="block btn w-full btn-outline">Home</button>
                </Link>
                <Link to={'/createtask'}>
                <divider></divider>
                <button  className="block btn w-full btn-outline">Create</button>
                </Link>

            </div>

            <div className="w-full">
                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Dashboard;