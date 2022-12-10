const Mars = () => {
  return (
    <div className=" mt-5">
      <div className=" flex flex-col  justify-center border-b border-neutral-400 items-center ">
        <h2 className="font-bellefair text-7xl">Mars</h2>
        <p className="max-w-md px-12 mb-8 text-sm ">
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
      </div>
      <div className="flex flex-col gap-10 p-10 ">
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm">AVG. DISTANCE</h4>
          <h3 className="font-bellefair text-3xl">225 mil. km</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-neutral-300 text-sm">EST. TRAVEL TIME</h4>
          <h3 className="font-bellefair text-3xl">9 months</h3>
        </div>
      </div>
    </div>
  );
};
export default Mars;
