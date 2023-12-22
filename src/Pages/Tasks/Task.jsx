import { Link } from "react-router-dom";

const Task = ({taskinfo,handleComplete,handleOngoing}) => {
    const { task, shortDescription,  dueDate,_id, priority, status} = taskinfo;
    return (
<div className='mt-10 bg-cyan-50 py-6 px-6 rounded-xl shadow-xl shadow-black cursor-pointer' >
            <h1 className='font-bold text-2xl'>Task: {task}</h1>
            <p className='font-bold text-xl mb-1'>Description: <span className='font-medium text-lg'>{shortDescription}</span></p>
            <p className="text-lg font-semibold">Priority: {priority}</p>
            <h2 className='text-2xl font-bold text-red-700'>Due Date: <span className='text-xl text-black'>{dueDate}</span></h2>
            <button onClick={()=>handleOngoing(_id)} className={`btn btn-accent text-xl font-bold mt-2 text-white ${status=='Ongoing' ? 'hidden':''}  ${status=='Completed' ? 'hidden':''}`}>Take Task</button>
            <button  className={`btn btn-accent text-xl font-bold mt-2 text-white ${status=='ToDo' ? 'hidden':''}  ${status=='Completed' ? 'hidden':''}`} onClick={()=>handleComplete(_id)}>Complete</button>
        </div>

    );
};

export default Task;