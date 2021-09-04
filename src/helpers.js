// storage keys
export const LAST_ID = "lastId";

// get the next available note ID
export const getNextId = () => {
    // If we have the lastID in storage, parse it to an int and add 1. Else return 0;
    return localStorage.getItem(LAST_ID) ? JSON.parse(localStorage.getItem('lastId'))+1 : 1;
}

// save a note to local storage
export const saveNote = (title, content, id) => {
    //If an id was passed, we update the note with that id
    const nextId = id ? id : getNextId();
    // parse note into JSON string
    const note = {id: nextId, title: title, content: content};
    // save note
    localStorage.setItem("Note"+nextId, JSON.stringify(note));
    //Increment last id if a new note was added
    if(!id){
        localStorage.setItem(LAST_ID, nextId);
    }
    return note;
}

// delete note with given id
export const deleteNote = (id) => {
    localStorage.removeItem("Note"+id);
}

// get all notes
export const getNotes = () => {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while ( i-- ) {
        if(keys[i].includes("Note")){
            values.push( JSON.parse(localStorage.getItem(keys[i])) );
        }
    }
    return values.sort( note => note.id).reverse();
}