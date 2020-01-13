export const signup = user => {
    return ($.ajax({
        url: '/api/users/',
        method: "POST",
        data: { user },
        dataType: "JSON"
    }));
};

export const login = user => {
    console.log(user);
    return( $.ajax({
        url: "/api/session",
        method: "POST",
        data: { user:{ username: user.username, password: user.password}},
        dataType: "JSON"
    }));
};
export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: "DELETE"
    })
)