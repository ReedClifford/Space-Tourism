const Moon = () => {
  return (
    <div className=" mt-5 z-40">
      <div className="  flex flex-col  justify-center border-b border-neutral-400 items-center lg:items-start  ">
        <h2 className="destinationHeader">Moon</h2>
        <p className="destinationDescription">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </div>
      <div className="destinationDetailContainer ">
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm lg:text-start">
            AVG. DISTANCE
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">384,400 KM</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm lg:text-start">
            EST. TRAVEL TIME
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">3 DAYS</h3>
        </div>
      </div>
    </div>
  );
};
export default Moon;
