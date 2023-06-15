// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const auth = getAuth();
    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState('');
    const googleProvider = new GoogleAuthProvider;
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setSuccess('Login Successfully')
                console.log(user);
                form.reset();
                navigate(from,{replace:true});
            })
            .catch(error => console.log(error))
    }
    //private route
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('Google Successfully');
                console.log(user);
                setUser(loggedInUser);
                navigate(from,{replace:true});
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    useEffect ( () => {
        document.title = "Login";
    },[])

    return (
        <div className="hero min-h-screen bg-base-200 text-white bg-gradient-to-r from-[#fb4a76] to-[#ffb199]">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center text-black lg:text-left w-1/2 mr-12">
                    <h1 className="font-black text-xl">A little boy, with his safari of toys</h1>
                    <br></br>
                    <p>With a chest full of toys and a heart full of glee,
                        A young boy sets out on a wild safari spree.
                        All his animal friends, big and small, come out to play,
                        As he leads them on a march in his own little way.

                        The lion roars, the gorilla swings,
                        The elephant trumpets, the dinosaur sings.
                        Together they march to the beat of his drum,
                        A joyful sight, a childhood memory to come.
                    </p>
                </div>
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-black">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold ">Login</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered text-white" />
                            </div>
                            <div className="form-control text-white">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-black font-bold bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400" type='submit' value="Login">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} className="btn text-black font-bold bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400" type='submit' value="Login"><span className="mr-2 bg-white rounded-full p-1"><FcGoogle /></span> Google</button>
                            </div>
                        </form>

                        <p className='my-4 text-center text-white'>New Member ?  ::  <Link className="font-black bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 bg-clip-text text-transparent" to="/signUp">Sign Up</Link></p>

                        <p className="text-success">{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;