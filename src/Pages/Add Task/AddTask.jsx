import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddTask = () => {
  const {user} = useContext(AuthContext);
  
  const { register, handleSubmit } = useForm()
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [{value:'High',label:'High'},{value:'Moderate',label:'Moderate'},{value:'Low',label:'Low'}];

    const  onSubmit =async (data)=>{
        
        const task = data.task;
        const shortDescription = data.description;
        const dueDate = data.date;
        const priority = selectedOption.value;
        const creator_email = user?.email;
        const status = 'ToDo';

    
        const AddData = {
          priority,
        task,
        shortDescription,
        creator_email,
        dueDate,
        status
    
        }
        console.log(AddData)
        axios.post(`http://localhost:5000/api/v1/tasks`,AddData)
        .then(()=>{
          toast.success("Added Successfully",{
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
            <form  onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-6">
              <input {...register("task")} id='task' className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" placeholder='Task' type="text" />
              <input {...register("description")} id='description' className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" placeholder='description' type="text" />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
              <Select
                    className="select"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    
                  />
              <input {...register("date")} id='date' className="w-80 py-1 px-2 bg-[#00000049] rounded-md text-white font-medium" placeholder='Date'  type="date" />
              </div>
              <button type="submit" className="btn bg-pink-600 btn-block text-white text-2xl font-bold">Add</button>
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddTask;