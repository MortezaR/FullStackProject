export const fetchFriend = (cur_user, friendId) => {
    return ($.ajax({
        url: `/api/users/${cur_user}/friends/${friendId}`
    }));
};
export const createFriend = (cur_user, friend) => {
    return ($.ajax({
        url: `/api/users/${cur_user}/friends`,
        method: "POST",
        data: { friend },
        dataType: "JSON"
    }));
};
export const deleteFriend = (cur_user, friendId) => {
    return ($.ajax({
        url: `/api/users/${cur_user}/friends/${friendId}`,
        method: "DELETE"
    }));
};