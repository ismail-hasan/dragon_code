import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';

const LoginPage = () => {
    const [error, setError] = useState({})
    const { signInUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()



    const handleLogIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        // console.log({ email, password })


        signInUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                navigate(location?.state ? location.state : "/")
                // console.log(user)
            })
            .catch(err => {
                setError(...error, err.message)
            })

    }
    return (
        <div>
            <form onSubmit={handleLogIn} className="card-body w-1/3 mx-auto">
                <h3 className='text-4xl text-center pb-3'>Login Your acount</h3>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                {
                    error &&
                    <p>{error.message}</p>
                }
                <div>
                    <p className='text-sm'>alrady login here to <Link to={"/auth/register"}>Register</Link> </p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

        </div>
    );
};

export default LoginPage;