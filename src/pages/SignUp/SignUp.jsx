import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must be contain capital letters");
      return;
    } else if (!/[@$!%*#?&]/.test(password)) {
      setError("Password must be contain one special character");
      return;
    } else {
      setSuccess("Sign UP successfull");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-48 bottom-11 text-2xl"
              >
                {showPassword ? (
                  <AiFillEyeInvisible></AiFillEyeInvisible>
                ) : (
                  <AiFillEye></AiFillEye>
                )}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              {error ? (
                <h2 className="text-sm  font-medium text-red-600 text-center">
                  {error}
                </h2>
              ) : (
                <h2 className="text-sm  font-medium text-green-600 text-center">
                  {success}
                </h2>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>
          <div className="px-4 py-3 text-center">
            Already have an account? please
            <Link
              className="ml-2 font-semibold hover:text-red-600 underline"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
