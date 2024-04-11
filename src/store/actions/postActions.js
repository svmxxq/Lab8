//функцияларды шығарады

// Добавление поста
export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: post,
    };
};

// Удаление поста
export const deletePost = (postId) => {
    return {
        type: 'DELETE_POST',
        payload: postId,
    };
};

// Обновление поста
export const updatePost = (postId, updatedPost) => {
    return {
        type: 'UPDATE_POST',
        payload: { postId, updatedPost },
    };
};
