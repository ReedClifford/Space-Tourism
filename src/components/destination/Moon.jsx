const Moon = () => {
  return (
    <div className=" mt-5 z-40">
      <div className=" flex flex-col  justify-center border-b border-neutral-400 items-center ">
        <h2 className="font-bellefair text-7xl">Moon</h2>
        <p className="max-w-md px-10 mb-8 text-sm ">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </div>
      <div className="flex flex-col  gap-10 p-10 ">
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm">AVG. DISTANCE</h4>
          <h3 className="font-bellefair text-3xl">384,400 km</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm">EST. TRAVEL TIME</h4>
          <h3 className="font-bellefair text-3xl">3 DAYS</h3>
        </div>
      </div>
    </div>
  );
};
export default Moon;
