import React, { useState } from "react";

// react-tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles/react-tabs.css';

// Styles
import { Wrapper, Content } from "./Home.styles";

// Components
import Board from './components/Board/Board';

// helpers
import { getBoards } from "./helpers.js"

const Home = () => {
    const [boards, setBoards] = useState(getBoards());
    //TODO: Move board header to outside the grid, into the board?
    // Finish create board functionality
    // Make notes save on change

    return (
        <Wrapper>
            <Content>
                <Tabs>
                    <TabList>
                        {boards.map( board => (
                            <Tab key={"Tab"+board.id}>{board.title}</Tab>
                        ))}
                        <Tab>Create New Board</Tab>
                    </TabList>
                    
                    {boards.map( board => (
                        <TabPanel key={"Panel"+board.id}>
                            <Board title={board.title} id={board.id} />
                        </TabPanel>
                    ))}
                    <TabPanel>
                        <Board/>
                    </TabPanel>
                </Tabs>
            </Content>
        </Wrapper>
    )
};

export default Home;