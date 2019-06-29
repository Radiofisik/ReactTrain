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
            stateCopy.posts.push({value: state.newMessageText});
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newMessageText = action.newText;
            console.log(state.newMessageText);
            return stateCopy;
        default:
            return stateCopy;
    }
};

export const AddPostCommandCreator = () => ({type: ADD_POST});

export const UpdateTextCreator = (content) => ({type: UPDATE_NEW_POST_TEXT, newText: content});

export default postsReducer;
