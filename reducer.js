import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMEN } from './actions'

const initialState = {
    comments: [],
    users: []
};
const app = combineReducers({
    comments,
    users
});

/* function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                    , ...state]
            })
        default:
            return state;
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        default:
            return state;
    }
}
*/