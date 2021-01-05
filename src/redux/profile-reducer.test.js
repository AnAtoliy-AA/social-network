import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'hi', likesCount: 4 },
        { id: 2, message: 'hi how are you', likesCount: 6 },
    ],
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('TEST');
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('new message should be correct', () => {
    let action = addPostActionCreator('TEST');
    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('TEST');
});


it(`after deleting length of message shouldn't be decrement if incorrect id`, () => {
    let action = deletePost(10);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});