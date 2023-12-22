import axios from 'axios';
import { toast } from 'react-toastify';

const AddTask = () => {

    const handleAdd = (event)=>{
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;
        const projectTitle = form.project.value;
        const shortDescription = form.description.value;
        const detailInformation = form.information.value;
        const dueDate = form.date.value;
    
        const AddData = {
            projectTitle,
        task,
        shortDescription,
        detailInformation,
        dueDate
    
        }
        axios.post(`https://task-management-server-peach.vercel.app/api/v1/tasks`,AddData,{withCredentials:true})
        .then(()=>{
          toast.error("Added Successfully",{
            autoClose: 2000
          });
        })
        .catch(()=>{
          toast.error("Add Cancelled",{
            autoClose: 2000
          });
        })
    
      }
    return (
        <div>
        <div
          className="hero h-[450px] rounded-xl mt-8"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/myzB8sY/glenn-carstens-peters-RLw-UC03-Gwc-unsplash.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className=" text-center lg:w-500px">
              <h1 className="text-3xl text-pink-400 font-bold mb-8">Add A Task</h1>
            <form onSubmit={handleAdd} className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-6">
              <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" placeholder='Task' type="text" name="task" />
              <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" placeholder='Project Title' name="project" type="text" />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
              <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" placeholder='Short Description' name="description" type="text" />
              <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" placeholder='Details' name="information" type="text" />
              </div>
              <input className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" placeholder='Date' name="date" type="date" />
              <br />
              <button type="submit" className="btn bg-pink-600 btn-block text-white text-2xl font-bold">Add</button>
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddTask;