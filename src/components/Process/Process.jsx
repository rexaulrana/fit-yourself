import {
  GiStairsGoal,
  GiSwordman,
  GiHighKick,
  GiAchievement,
} from "react-icons/gi";

const Process = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-10 mb-6">Our Process</h1>

      <div className="py-5 bg-pink-300 md:py-4  md:px-6 md:flex justify-evenly items-center gap-7">
        <div className="mb-4">
          <span className="text-7xl flex justify-center  items-center">
            <GiStairsGoal className=""></GiStairsGoal>
          </span>
          <h3 className="text-xl  text-center font-semibold">
            Analyze Your Goal
          </h3>
        </div>
        <div className="mb-4">
          <span className="text-7xl flex justify-center  items-center  ">
            <GiSwordman></GiSwordman>
          </span>
          <h3 className="text-xl text-center font-semibold">Work Hard On It</h3>
        </div>
        <div className="mb-4">
          <span className="text-7xl flex justify-center  items-center  ">
            <GiHighKick></GiHighKick>
          </span>
          <h3 className="text-xl text-center font-semibold">
            Improve Your Performance
          </h3>
        </div>
        <div className="mb-8">
          <span className="text-7xl  flex justify-center  items-center  ">
            <GiAchievement></GiAchievement>
          </span>
          <h3 className="text-xl text-center  font-semibold">
            Achieve Your Destiny
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Process;
