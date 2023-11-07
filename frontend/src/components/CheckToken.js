export const CheckToken = async (navigate, token) => {
    const tokenResponse = await fetch('/people/getUserWithToken', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    if (tokenResponse.ok) {
        navigate('/auxiliary');
    } else {
        console.log("token: "+ token)
        console.log("error from /people/getUserWithToken")
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }
}
