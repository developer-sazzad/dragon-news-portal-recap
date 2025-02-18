import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});

    const location = useLocation();

    // console.log(location)
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            });

    }
    return (
        <div className="flex justify-center items-center py-8">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-5">
                <h2 className="text-center font-bold text-3xl mt-5">Login your Account</h2>
                <form onSubmit={handleLogin} className="card-body pt-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {
                            error?.login && <label className="label text-sm text-red-600">{error.login}</label>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                    <p>New to website? Please <Link className="font-semibold hover:underline" to='/auth/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;