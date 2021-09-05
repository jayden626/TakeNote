import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { NotificationManager } from 'react-notifications';

// Styles
import { Wrapper, Content } from './Note.styles';

// Helper
import { saveNote, getNotes, deleteNote } from '../../helpers';

const Note = ({ setNotes, title = '', content = '', id, board }) => {
    const [noteTitle, setNoteTitle] = useState(title)
    const [noteContent, setNoteContent] = useState(content)

    const handleSaveClick = () => {
        //Check for empty note
        if (!noteTitle || !noteContent) {
            NotificationManager.warning("Please fill out both fields", "Cannot Save Note", 2000);
            return;
        }
        //Save note
        saveNote(noteTitle, noteContent, id, board);
        // If this note doesn't have an ID, then it is a new note.
        if (!id) {
            setNotes(getNotes(board));
            // Empty text fields
            setNoteTitle('');
            setNoteContent('');
        }
        NotificationManager.success("Note has been saved", "Note Saved!", 2000);
    }

    const handleDeleteClick = () => {
        deleteNote(id);
        setNotes(getNotes(board));
        NotificationManager.error("Note has been deleted", "Note Deleted!", 2000);
    }

    return (
        <Wrapper>
            <Content>
                <input type='text' placeholder='Enter note title' value={noteTitle} onChange={event => setNoteTitle(event.target.value)} />
                <textarea placeholder='Enter note text' value={noteContent} onChange={event => setNoteContent(event.target.value)} />
                <div>
                    {id && <button type='submit' className="danger" onClick={handleDeleteClick}>Delete</button> }
                    <button type='submit' className="success" onClick={handleSaveClick}>Save</button>
                </div>
            </Content>
        </Wrapper>
    );
}

Note.propTypes = {
    setNotes: PropTypes.func,
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.number,
    board: PropTypes.number
}

export default Note;