const Titan = () => {
  return (
    <div className=" mt-5 z-40">
      <div className=" flex flex-col  justify-center border-b border-neutral-400 items-center lg:items-start ">
        <h2 className="destinationHeader">Titan</h2>
        <p className="destinationDescription">
          "The only moon known to have a dense atmosphere other than Earth,
          Titan is a home away from home (just a few hundred degrees colder!).
          As a bonus, you get striking views of the Rings of Saturn.
        </p>
      </div>
      <div className="destinationDetailContainer ">
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm lg:text-start">
            AVG. DISTANCE
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">1.6 BIL. KM</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm lg:text-start">
            EST. TRAVEL TIME
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">7 YEARS</h3>
        </div>
      </div>
    </div>
  );
};
export default Titan;
