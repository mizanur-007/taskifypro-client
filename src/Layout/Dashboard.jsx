import { Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className="flex">
            <div className=" bg-violet-200 h-[100vh] w-[25vh]">

            </div>

            <div className="w-[75vh]">
                <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default Dashboard;