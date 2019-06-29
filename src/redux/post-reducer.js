const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState =
    {
        newMessageText: "something",
        posts:
            [
                {
                    value: "testValue"
                },
                {
                    value: "testValue2"
                }
            ]
    };

const postsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    stateCopy.posts = [...state.posts];
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {value: state.newMessageText}]
            };
        case UPDATE_NEW_POST_TEXT:
            console.log(state.newMessageText);
            return {...state, newMessageText: action.newText};
        default:
            return state;
    }
};

export const AddPostCommandCreator = () => ({type: ADD_POST});

export const UpdateTextCreator = (content) => ({type: UPDATE_NEW_POST_TEXT, newText: content});

export default postsReducer;
