export const fetchPosts = cur_user => {
    return ($.ajax({
        url: `/api/users/${cur_user}/posts`
    }));
};
export const fetchPost = (cur_user, postId) => {
    return ($.ajax({
        url: `/api/users/${cur_user}/posts/${postId}`
    }));
};
export const createPost = (cur_user,post) => {
    return ($.ajax({
        url: `/api/users/${cur_user}/posts`,
        method: "POST",
        data: { post },
        dataType: "JSON"
    }));
};
export const updatePost = (cur_user,post) => {
    return ($.ajax({
        url: `/api/users/${cur_user}/posts/${post.id}`,
        method: "PATCH",
        data: { post },
        dataType: "JSON"
    }));
};
export const removePost = (cur_user,postId) => {
    return ($.ajax({
        url: `/api/users/${cur_user}/posts/${postId}`,
        method: "DELETE"
    }));
};