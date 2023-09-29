import {useNavigate} from 'react-router-dom';
import {useSignIn} from 'react-auth-kit';
import {useEffect, useState} from 'react';
import axios, {AxiosError} from 'axios';

const LogIn = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const signIn = useSignIn();
    const [role, setRole] = useState(''); // Corrected initialization of role state

    const onSave = async (values) => {
        setError('');

        try {
            const response = await axios.post('/people/authenticate', values);
            signIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: {email: values.email, role: response.data.role}

            });

            // useEffect(()=>{
            //     setRole(response.data.role);
            // }, [response])
            navigate('/auxiliary');
        } catch (err) {
            if (err instanceof AxiosError) setError(err.response?.data.message);
            else if (err instanceof Error) setError(err.message);
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
