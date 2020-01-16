export const fetchUser = (cur_user) => {
    return ($.ajax({
        url: `/api/users/${cur_user}`
    }));
};