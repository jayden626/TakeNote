import React, { useState } from "react";
import { PropTypes } from 'prop-types';

// Component
import Note from '../Note/Note';
import Grid from '../Grid/Grid';

// Helpers
import { getNotes } from "../../helpers.js"

const Board = ({ title, id }) => {
    const [notes, setNotes] = useState(getNotes(id));
    return (
        <Grid header={title}>
            <Note setNotes={setNotes} board={id} />
            {notes.map(note => (
                <Note key={note.id} setNotes={setNotes} title={note.title} content={note.content} id={note.id} board={id} />
            ))}
        </Grid>
    );

}

Board.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number
}

export default Board;