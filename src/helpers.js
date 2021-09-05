// storage keys
export const LAST_ID = "lastId";
export const LAST_BOARD_ID = "lastBoardId";


// note functions


// get the next available note ID
export const getNextId = () => {
    // If we have the lastID in storage, parse it to an int and add 1. Else return 0;
    return localStorage.getItem(LAST_ID) ? JSON.parse(localStorage.getItem(LAST_ID)) + 1 : 1;
}

// save a note to local storage
export const saveNote = (title, content, id, board) => {
    //If an id was passed, we update the note with that id
    const nextId = id ? id : getNextId();
    // parse note into JSON string
    const note = { id: nextId, title: title, content: content, board: board };
    // save note
    localStorage.setItem("note" + nextId, JSON.stringify(note));
    //Increment last id if a new note was added
    if (!id) {
        localStorage.setItem(LAST_ID, nextId);
    }
    return note;
}

// delete note with given id
export const deleteNote = (id) => {
    localStorage.removeItem("note" + id);
}

// get all notes
export const getNotes = (board) => {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
        if (keys[i].includes("note")) {
            const note = JSON.parse(localStorage.getItem(keys[i]));
            if (note.board && note.board === board) {
                values.push(note);
            }
        }
    }
    return values.sort(note => note.id).reverse();
}


// Board functions


// get the next available note ID
export const getNextBoardId = () => {
    // If we have the lastID in storage, parse it to an int and add 1. Else return 0;
    return localStorage.getItem(LAST_BOARD_ID) ? JSON.parse(localStorage.getItem(LAST_BOARD_ID)) + 1 : 1;
}

// save a board to local storage
export const saveBoard = (title, id) => {
    //If an id was passed, we update the board with that id
    const nextId = id ? id : getNextId();
    // parse board into JSON string
    const board = { id: nextId, title: title };
    // save board
    localStorage.setItem("board" + nextId, JSON.stringify(board));
    //Increment last id if a new board was added
    if (!id) {
        localStorage.setItem(LAST_BOARD_ID, nextId);
    }
    return board;
}

// delete note with given id
export const deleteBoard = (id) => {
    localStorage.removeItem("board" + id);
}

// get all boards
export const getBoards = () => {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
        if (keys[i].includes("board")) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
    }
    return values.sort(board => board.id);
}