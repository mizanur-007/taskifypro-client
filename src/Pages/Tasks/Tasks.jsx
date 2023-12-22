import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoaderPage from '../LoaderPage/LoaderPage';
import Task from './Task';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Tasks = () => {
    const [selectedTab, setSelectedTab] = useState('ToDo');
    const {user} = useContext(AuthContext)
    console.log(user?.email)

    const handleTabSelect = (index) => {
        const tabTitles = ['ToDo', 'Ongoing', 'Completed'];
        setSelectedTab(tabTitles[index]);
    }

    //data load
    const {data, isLoading, isError,refetch} = useQuery({
        queryKey:["tasks",selectedTab],
        queryFn: async()=>{
            const result = await axios.get(`http://localhost:5000/api/v1/tasks?email=${user?.email}&status=${selectedTab}`);
            const data = await result.data;
            return data;
        }
    })


    

    if(isLoading){
        return <LoaderPage></LoaderPage>
    }
    if(isError){
        return <ErrorPage></ErrorPage>
    }
    console.log(data)
    const tasks = data.result;

    const handleComplete = async(id)=>{
        const status = 'Completed'
        const data = await axios.patch(`http://localhost:5000/api/v1/update/${id}`,{status})
        console.log(data)
        refetch()
    }
    const handleOngoing = async(id)=>{
        const status = 'Ongoing'
        const data = await axios.patch(`http://localhost:5000/api/v1/update/${id}`,{status})
        console.log(data)
        refetch()
    }

    return (
        <div className='mt-10 ml-11'>
            <Tabs onSelect={index => handleTabSelect(index)}>
                <TabList>
                    <Tab>ToDo</Tab>
                    <Tab>Ongoing</Tab>
                    <Tab>Completed</Tab>
                </TabList>

                <TabPanel>
                {
                tasks.map(taskinfo => <Task key={taskinfo._id} taskinfo={taskinfo} handleOngoing={handleOngoing} handleComplete={handleComplete}></Task>)
            }
                </TabPanel>
                <TabPanel>
                {
                tasks.map(taskinfo => <Task key={taskinfo._id} taskinfo={taskinfo} handleOngoing={handleOngoing} handleComplete={handleComplete}></Task>)
            }
                </TabPanel>
                <TabPanel>
                {
                tasks.map(taskinfo => <Task key={taskinfo._id} taskinfo={taskinfo} handleOngoing={handleOngoing} handleComplete={handleComplete}></Task>)
            }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Tasks;
