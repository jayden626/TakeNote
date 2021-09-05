import React, { useState } from "react";
import { PropTypes } from 'prop-types';

// Style
import { Wrapper, Content } from "./Board.styles";

// Component
import Note from '../Note/Note';
import Grid from '../Grid/Grid';

// Helpers
import { getNotes, getBoards, saveBoard } from "../../helpers.js"

const Board = ({ title, id, setBoards }) => {
    const [notes, setNotes] = useState(getNotes(id));
    const [name, setName] = useState(title);

    const handleChange = ( event ) => {
        setName(event.target.value);
        saveBoard(event.target.value, id);
        setBoards(getBoards());
    }

    return (
        <Wrapper>
            <Content>
                <input type="text" placeholder={"Enter board name"} value={name} onChange={handleChange}/>
                <Grid>
                    <Note setNotes={setNotes} board={id} />
                    {notes.map(note => (
                        <Note key={note.id} setNotes={setNotes} title={note.title} content={note.content} id={note.id} board={id} />
                    ))}
                </Grid>
            </Content>
        </Wrapper>
    );

}

Board.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    setBoard: PropTypes.func
        
}

export default Board;