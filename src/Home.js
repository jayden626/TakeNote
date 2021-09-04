import React, {useState} from "react";

// Styles
import { Wrapper } from './Home.styles';

// Image
import img from './images/cork.jpg'

// Components
import Note from './components/Note/Note';
import Grid from './components/Grid/Grid';

// helpers
import {getNotes} from "./helpers.js"

const Home = () => {
    const [notes, setNotes] = useState(getNotes());

    return (
        <Wrapper>
            <Grid header="Notes" img={img}>
                <Note setNotes={setNotes} />
                {notes.map( note => (
                    <Note key={note.id} setNotes={setNotes} title={note.title} content={note.content} id={note.id}/>
                ))}
            </Grid>
        </Wrapper>
    )
};

export default Home;