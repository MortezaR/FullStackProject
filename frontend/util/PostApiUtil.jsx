export const fetchPosts = user => {
    return ($.ajax({
        url: `/api/users/${user}/posts`
    }));
};
export const fetchComments = (user,post_id) => {
    return ($.ajax({
        url: `/api/users/${user}/posts/${post_id}/comments`
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
export const deletePost = (cur_user,postId) => {
    return ($.ajax({
        url: `/api/users/${cur_user}/posts/${postId}`,
        method: "DELETE"
    }));
};