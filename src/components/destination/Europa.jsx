const Europa = () => {
  return (
    <div className=" mt-5 z-40">
      <div className=" flex flex-col  justify-center border-b border-neutral-400 items-center lg:items-start ">
        <h2 className="destinationHeader">Europa</h2>
        <p className="destinationDescription ">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
      </div>
      <div className="destinationDetailContainer ">
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm lg:text-start">
            AVG. DISTANCE
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">628 MIL. KM</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm lg:text-start">
            EST. TRAVEL TIME
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">3 YEARS</h3>
        </div>
      </div>
    </div>
  );
};
export default Europa;
