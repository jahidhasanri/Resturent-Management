import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';
import animationLogin from '../../src/assets/lotti/Animation - 1735216092780.json'
import Lottie from 'lottie-react';


const Login = () => {
  const { handelLoginWemail, setUser, handelLoginWithGoogle } =useContext(AuthContext)
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Handle login with email and password
    handelLoginWemail(email, password)
      .then((result) => {
        if (result?.user) {
          toast.success('Login successful!');
          setUser(result.user);
          setTimeout(() => {
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
          }, 1000);
        } else {
          toast.error('Login failed: User not found!');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error(`Login failed: ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    handelLoginWithGoogle()
      .then((result) => {
        if (result?.user) {
          toast.success('Login with Google successful!');
          setUser(result.user);
          setTimeout(() => {
            navigate('/');
          }, 1000);
        } else {
          toast.error('Google login failed!');
        }
      })
      .catch((error) => {
        console.error('Google Login Error:', error);
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  return (
    <div>
      {/* <ToastContainer /> */}
       
      <div className="hero bg-base-200 min-h-screen mt-[100px] md:mt-[5px]">
      
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={animationLogin} className=''></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <Link to="/forgetpassword" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Don't have an account? Please{' '}
                <Link to="/register" className="text-red-500 border-b-2">
                  Register
                </Link>
              </p>
            </form>
            <div className="form-control mt-4 w-8/12 mx-auto mb-10">
              <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary">
                <FcGoogle /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
