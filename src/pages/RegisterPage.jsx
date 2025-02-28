import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';

const RegisterPage = () => {
    const { createNewUser, setUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const submitHandle = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        // const firstName = e.target.name.value
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log({ name, photo, email, password })

        createNewUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                navigate("/category/08")
                
            })
            .catch(error => console.log(error))

        logOut()
            .then(console.log("sginOUt success"))
            .catch(err => console.log(err))
    };



    return (
        <div>
            <form onSubmit={submitHandle} className="card-body w-1/2 mx-auto">
                <div className="form-control">
                    <h3 className='text-4xl text-center pb-3'>Register Your acount</h3>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhootURL</span>
                    </label>
                    <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div>
                    <p className='text-sm'>alrady login here to <Link to={"/auth/login"}>Login in</Link> </p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;