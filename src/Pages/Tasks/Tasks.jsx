import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoaderPage from '../LoaderPage/LoaderPage';
import Task from './Task';

const Tasks = () => {
    const [selectedTab, setSelectedTab] = useState('ToDo');

    const handleTabSelect = (index) => {
        const tabTitles = ['ToDo', 'Ongoing', 'Completed'];
        setSelectedTab(tabTitles[index]);
    }

    //data load
    const {data, isLoading, isError} = useQuery({
        queryKey:["tasks"],
        queryFn: async()=>{
            const result = await axios.get(`http://localhost:5000/api/v1/tasks`);
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
                tasks.map(taskinfo => <Task key={taskinfo._id} taskinfo={taskinfo}></Task>)
            }
                </TabPanel>
                <TabPanel>
                    <h2>{selectedTab}</h2>
                </TabPanel>
                <TabPanel>
                    <h2>{selectedTab}</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Tasks;
