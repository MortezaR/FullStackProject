export const fetchUser = (cur_user) => {
    return ($.ajax({
        url: `/api/users/${cur_user}`
    }));
};
export const updateUser = (cur_user, user) => {
    return ($.ajax({
        url: `/api/users/${cur_user}`,
        method:"PATCH",
        data: {user},
        dataType: "JSON"
    }));
};