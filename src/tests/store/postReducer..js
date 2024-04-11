import postReducer from '../reducers/postReducer';
import * as actions from '../actions/postActions';

test('adds a post', () => {
    const initialState = {
        posts: [],
    };
    const newPost = {
        id: 1,
        title: 'New Post',
        content: 'This is a new post.',
    };
    const action = actions.addPost(newPost);

    const newState = postReducer(initialState, action);

    expect(newState.posts).toHaveLength(1);
    expect(newState.posts[0]).toEqual(newPost);
});


