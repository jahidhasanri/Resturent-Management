import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { IoEyeSharp } from 'react-icons/io5';
import { updateProfile } from "firebase/auth";  // Import updateProfile from Firebase
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
  const { handelRegistWemail, setUser, handelLoginWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Email and password validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Validate email and password
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
      return;
    }

    // Register user with email and password
    handelRegistWemail(email, password)
      .then((result) => {
       
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo
        })
        .then(() => {
          
          setUser({
            ...result.user,
            displayName: name,
            photoURL: photo
          });
          toast.success('Registration successful!');
          setTimeout(() => {
            navigate('/');
          }, 1000);
        })
        .catch((error) => {
          console.error(error);
          toast.error(`Failed to update profile: ${error.message}`);
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Registration failed: ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    handelLoginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success('Login with Google successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  return (
    <div>
        {/* <ToastContainer /> */}
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[50px] right-3 text-xl"
                >
                  {showPassword ? <HiMiniEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Have an account? Please{' '}
                <Link to="/login" className="text-red-500 border-b-2">
                  Login
                </Link>
              </p>
            </form>
            <div className="form-control mt-4 w-8/12 mx-auto mb-10">
              <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary">
                <FcGoogle />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
