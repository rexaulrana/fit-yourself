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

      <div className="bg-pink-300 md:py-4 md:px-6 flex justify-evenly items-center gap-7">
        <div className="">
          <span className="text-7xl   ">
            <GiStairsGoal className=""></GiStairsGoal>
          </span>
          <h3 className="text-xl font-semibold">Analyze Your Goal</h3>
        </div>
        <div className="">
          <span className="text-7xl   ">
            <GiSwordman></GiSwordman>
          </span>
          <h3 className="text-xl font-semibold">Work Hard On It</h3>
        </div>
        <div className="">
          <span className="text-7xl   ">
            <GiHighKick></GiHighKick>
          </span>
          <h3 className="text-xl font-semibold">Improve Your Performance</h3>
        </div>
        <div className="">
          <span className="text-7xl   ">
            <GiAchievement></GiAchievement>
          </span>
          <h3 className="text-xl font-semibold">Achieve Your Destiny</h3>
        </div>
      </div>
    </div>
  );
};

export default Process;
