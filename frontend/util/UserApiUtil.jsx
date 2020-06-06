export const fetchUser = (user) => {
    return ($.ajax({
        url: `/api/users/${user}`
    }));
};


export const searchUser = (user) => {
    return ($.ajax({
        url: `/api/users/search`,
        method:"GET",
        data: {user},
        dataType: "JSON"
    }));
};
export const updateUser = (user) => {
    return ($.ajax({
        url: `/api/users/${user}`,
        method:"PATCH",
        data: {user},
        dataType: "JSON"
    }));
};