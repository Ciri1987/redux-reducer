import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: 'nowy komentarz',
        id: uuid.v4()
    }
}
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: 10
    }
}
function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        id: 15,
        text: 'wyedytowany tekst komentarza'
    }
}
function thumbUpComment(id) {
    return {

        type: THUMB_UP_COMMENT,
        id: 20,
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: 30,
    }
}