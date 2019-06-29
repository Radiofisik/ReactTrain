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
    switch (action.type) {
        case ADD_POST:
            state.posts.push({value: state.newMessageText});
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newMessageText = action.newText;
            console.log(state.newMessageText);
            return state;
        default:
            return state;
    }
};

export const AddPostCommandCreator = () => ({type: ADD_POST});

export const UpdateTextCreator = (content) => ({type: UPDATE_NEW_POST_TEXT, newText: content});

export default postsReducer;
