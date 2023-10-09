// import { Navigate, useNavigate } from "react-router-dom";
import error from "../../assets/images/error.jpg";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <img className="h-screen w-full" src={error} />
      </div>
    </div>
  );
};

export default ErrorPage;
