// функциялармен управления жасайды

const initialState = {
    posts: [],
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, { ...action.payload, id: state.posts.length + 1 }],
            };
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload),
            };
        case 'UPDATE_POST':
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.postId ? { ...post, ...action.payload.updatedPost } : post
                ),
            };
        default:
            return state;
    }
};

export default postReducer;
