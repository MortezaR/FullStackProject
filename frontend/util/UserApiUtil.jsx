export const fetchUser = (user) => {
    return ($.ajax({
        url: `/api/users/${user}`
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