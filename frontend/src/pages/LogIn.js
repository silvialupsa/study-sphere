import {useNavigate} from 'react-router-dom';
const logInPost = (personDetails) => {
    console.log("Request Data:", JSON.stringify(personDetails));

    return fetch("/api/v1/auth/authenticate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify(personDetails),
    }).then((res) => res.json());
}

const onSave = (authenticate) => {
    // const navigate = useNavigate();
    logInPost(authenticate).then(() => {
        // navigate("/home")
    });
};

const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    const authenticateData = {
       "email": formData.get("email"),
        "password" :formData.get("password")
    };
    console.log(authenticateData);
    onSave(authenticateData);
};

const LogIn = () => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">I accept terms and conditions.</label>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </div>
    );
};
export default LogIn;