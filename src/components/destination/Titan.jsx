const Titan = () => {
  return (
    <div className=" mt-5">
      <div className=" flex flex-col  justify-center border-b border-neutral-400 items-center ">
        <h2 className="font-bellefair text-7xl">Titan</h2>
        <p className="max-w-md px-12 mb-8 text-sm ">
          "The only moon known to have a dense atmosphere other than Earth,
          Titan is a home away from home (just a few hundred degrees colder!).
          As a bonus, you get striking views of the Rings of Saturn.
        </p>
      </div>
      <div className="flex flex-col gap-10 p-10 ">
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm">AVG. DISTANCE</h4>
          <h3 className="font-bellefair text-3xl">1.6 bil. km</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm">EST. TRAVEL TIME</h4>
          <h3 className="font-bellefair text-3xl">7 years</h3>
        </div>
      </div>
    </div>
  );
};
export default Titan;
