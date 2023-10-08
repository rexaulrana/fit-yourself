const Faq = () => {
  return (
    <div className=" w-full">
      <h3 className="text-3xl font-bold text-center mb-4">FAQ</h3>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          ARE YOU COVID- SAFE?
        </div>
        <div className="collapse-content">
          <p>
            All of our trainers are triple vaccinated, we are always wearing
            medical grade masks, and we clean all of our equipment before and
            after each session.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          HOW LONG HAVE YOU BEEN IN BUSINESS?
        </div>
        <div className="collapse-content">
          <p>
            After specializing in in-home training for various clients for six
            years, Darren Singer began Build Yourself Fitness in August 2010.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          WHAT TYPE OF WORKOUTS DO YOU DO?
        </div>
        <div className="collapse-content">
          <p>
            For rapid weight loss, we recommend circuit training, doing
            fundamental exercises to get your body in amazing shape as soon as
            possible.
          </p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          DO WE HAVE A NUTRITIONIST?
        </div>
        <div className="collapse-content">
          <p>
            We can refer you to a dietician or coordinate our program with your
            own nutritionist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
