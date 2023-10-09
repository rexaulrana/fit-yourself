// import caro2 from "../../assets/images/caro2.jpg";

// import Navbar from "../Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/1stnKxt/banner1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-center text-neutral-content">
          <div
            className="max-w-md"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h1 className="mb-5  text-5xl font-bold">
              START YOUR
              <br />
              <span className="text-amber-500">FITNESS</span>
              <br />
              JOURNEY TODAY
            </h1>
            <p className="mb-5 text-5xl">
              <br />
              with{" "}
              <span className="text-5xl font-bold text-amber-500 ">
                our Best Services
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
