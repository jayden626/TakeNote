import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';

// Styles
import { Wrapper, Content } from './Note.styles';

// Helper
import { saveNote, getNotes, deleteNote } from '../../helpers';

const Note = ({ setNotes, title = '', content = '', id }) => {
    const [noteTitle, setNoteTitle] = useState(title)
    const [noteContent, setNoteContent] = useState(content)

    const handleSaveClick = () => {
        //Check for empty note
        if (!noteTitle || !noteContent) {
            NotificationManager.warning("Please fill out both fields", "Cannot Save Note", 2000);
            return;
        }
        //Save note
        const note = saveNote(noteTitle, noteContent, id);
        // If this note doesn't have an ID, then it is a new note.
        if (!id) {
            setNotes(getNotes());
            // Empty text fields
            setNoteTitle('');
            setNoteContent('');
        }
        NotificationManager.success("Note has been saved", "Note Saved!", 2000);
    }

    const handleDeleteClick = () => {
        deleteNote(id);
        setNotes(getNotes());
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

export default Note;