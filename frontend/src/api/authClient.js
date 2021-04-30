const authClient = {
    logout: () => {
        localStorage.removeItem('token');
        window.location = "/";
    },
    isLoggedIn: () => localStorage.getItem('token') !== null
};

export default authClient;