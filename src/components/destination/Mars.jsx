const Mars = () => {
  return (
    <div className=" mt-5 z-40">
      <div className=" flex flex-col  justify-center border-b border-neutral-400 items-center lg:items-start ">
        <h2 className="destinationHeader">Mars</h2>
        <p className="destinationDescription ">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
      </div>
      <div className="destinationDetailContainer ">
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm lg:text-start">
            AVG. DISTANCE
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">225 MIL. KM</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm lg:text-start">
            EST. TRAVEL TIME
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">9 MONTHS</h3>
        </div>
      </div>
    </div>
  );
};
export default Mars;
