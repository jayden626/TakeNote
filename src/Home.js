import React, {useState} from "react";

// Components
import Note from './components/Note/Note';
import Grid from './components/Grid/Grid';

// helpers
import {getNotes} from "./helpers.js"

const Home = () => {
    const [notes, setNotes] = useState(getNotes());

    return (
        <>
            <Grid header="Notes">
                <Note setNotes={setNotes} />
                {notes.map( note => (
                    <Note key={note.id} setNotes={setNotes} title={note.title} content={note.content} id={note.id}/>
                ))}
            </Grid>
        </>
    )
};

export default Home;