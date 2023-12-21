import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tasks = () => {
    const [selectedTab, setSelectedTab] = useState('ToDo');

    const handleTabSelect = (index) => {
        const tabTitles = ['ToDo', 'Ongoing', 'Completed'];
        setSelectedTab(tabTitles[index]);
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
                    <h2>{selectedTab}</h2>
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
