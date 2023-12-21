import { Link } from "react-router-dom";

const Task = ({taskinfo}) => {
    const { task, shortDescription,  dueDate,_id} = taskinfo;
    return (
<Link to={`/taskdetails/${_id}`}>
<div className='mt-10 bg-cyan-50 py-6 px-6 rounded-xl shadow-xl shadow-black cursor-pointer' >
            <h1 className='font-bold text-2xl'>Task: {task}</h1>
            <p className='font-bold text-xl mb-1'>Description: <span className='font-medium text-lg'>{shortDescription}</span></p>
            <h2 className='text-2xl font-bold text-red-700'>Due Date: <span className='text-xl text-black'>{dueDate}</span></h2>
        </div>
</Link>
    );
};

export default Task;