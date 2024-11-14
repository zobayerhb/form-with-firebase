import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userSuccess, setUserSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    setErrorMessage("");
    setUserSuccess(false);

    if (!terms) {
      setErrorMessage("please accept our terms and conditions!");
      return
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters or more!");
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "password should be at least one uppercase, one lowercase, one number, one special character"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setUserSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold">Login now!</h1>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-14 right-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control">
            <label className="label justify-start cursor-pointer">
              <input type="checkbox" name="terms" className="checkbox" />
              <span className="label-text ml-3">
                Accept Our Terms & Conditions
              </span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        {errorMessage && (
          <p className="text-red-500 font-bold">{errorMessage}</p>
        )}
        {userSuccess && (
          <p className="text-success font-bold">User successfully added</p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
