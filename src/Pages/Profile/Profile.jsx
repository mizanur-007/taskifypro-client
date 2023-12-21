import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Tasks from "../Tasks/Tasks";


const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
<>
<div className="flex items-center justify-center gap-7 ml-12 mt-10 w-full">
        <img className="rounded-xl" src={user?.photoURL} alt="" />
        <h1 className="text-2xl font-bold">Hi, {user?.displayName}</h1>
    </div>
    <Tasks></Tasks>
</>
    );
};

export default Profile;