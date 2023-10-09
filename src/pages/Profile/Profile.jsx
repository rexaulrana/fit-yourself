import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import user1 from "../../assets/images/user1.png";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className=" bg-pink-200 py-7 mb-3">
        <h2 className="text-center text-3xl font-bold">Your Profile</h2>
      </div>
      <div className="relative mx-auto flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="flex items-center justify-center relative mx-4  h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          {user?.photoURL ? (
            <img className="h-full w-full " src={user.photoURL} alt="" />
          ) : (
            <img src={user1} alt="" />
          )}
        </div>
        <div className="p-6 text-center">
          {user?.displayName ? (
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {user.displayName}
            </h4>
          ) : (
            ""
          )}
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-lg font-medium  leading-relaxed text-transparent antialiased">
            ID NO: 27827
          </p>
          <p className="block text-xl font-medium ">
            Email Address:{" "}
            <span className="text-lg font-normal">{user.email}</span>
          </p>
          <h1 className="block text-xl font-medium  ">
            Last Signin Time :{" "}
            <span className=" text-lg  font-normal ">
              {user.metadata.lastSignInTime}
            </span>{" "}
          </h1>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
