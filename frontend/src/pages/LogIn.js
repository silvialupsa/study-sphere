import {useNavigate} from 'react-router-dom';
import { useState} from 'react';


const LogIn = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSave = async (values) => {
        setError('');
        try {
            const response = await fetch('/people/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("token", responseData.token);

                const tokenResponse = await fetch('/people/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(responseData),
                });

                if (tokenResponse.ok) {
                    const dataWithUser = await tokenResponse.json();
                    localStorage.setItem("user", JSON.stringify(dataWithUser))
                }
                navigate('/auxiliary');
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (err) {
            setError(err.message);
        }
    };



    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const authenticateData = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        onSave(authenticateData);
    };

    return (
        <div>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                        />
                        <div id="email" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            I accept terms and conditions.
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Log In
                    </button>
                </form>
        </div>
    );
};

export default LogIn;
