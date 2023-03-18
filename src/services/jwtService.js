const getAccessToken = () => {
    return localStorage.getItem("user");
}
const logout = () => {
    localStorage.removeItem("user");
};
export {
    getAccessToken,
    logout
}