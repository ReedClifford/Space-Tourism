const Europa = () => {
  return (
    <div className=" mt-5 z-40">
      <div className=" flex flex-col  justify-center border-b border-neutral-400 items-center ">
        <h2 className="font-bellefair text-7xl">Europa</h2>
        <p className="max-w-md px-12 mb-8 text-sm ">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
      </div>
      <div className="flex flex-col gap-10 p-10 ">
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm">AVG. DISTANCE</h4>
          <h3 className="font-bellefair text-3xl">628 mil. km</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm">EST. TRAVEL TIME</h4>
          <h3 className="font-bellefair text-3xl">3 years</h3>
        </div>
      </div>
    </div>
  );
};
export default Europa;
