import React, { useState } from "react";

// react-tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles/react-tabs.css';

// Styles
import { Wrapper, Content } from "./Home.styles";

// Components
import Board from './components/Board/Board';

// helpers
import { getBoards, saveBoard, getLastSelectedBoard, setLastSelectedBoard } from "./helpers.js"

const Home = () => {
    const [boards, setBoards] = useState(getBoards());
    const [tabIndex, setTabIndex] = useState(getLastSelectedBoard());
    // Make notes save on change
    
    const handleSelect = (index) => {
        //if it's the last tab, that's the create new board button
        //we should use boards.length-1, but we must +1 to account for
        //the manually added 'Create new board' tab
        if(index === boards.length) {
            //Create a new board and update
            saveBoard();
            setBoards(getBoards());
        }
        //This would set selected to 'Create new board' button,
        //but boards.length will increment by 1 when the new board saves
        //so we're safe to set it to this
        setTabIndex(index);
        setLastSelectedBoard(index);
    }

    return (
        <Wrapper>
            <Content>
                <Tabs selectedIndex={tabIndex} onSelect={handleSelect}>
                    <TabList>
                        {boards.map( board => (
                            <Tab key={"Tab"+board.id} selected>{board.title ? board.title : "untitled"}</Tab>
                        ))}
                        <Tab>Create New Board</Tab>
                    </TabList>
                    
                    {boards.map( board => (
                        <TabPanel key={"Panel"+board.id}>
                            <Board title={board.title} id={board.id} setBoards={setBoards} />
                        </TabPanel>
                    ))}
                    <TabPanel>
                        <Board setBoards={setBoards}/>
                    </TabPanel>
                </Tabs>
            </Content>
        </Wrapper>
    )
};

export default Home;