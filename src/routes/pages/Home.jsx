import mobileBg from "../../assets/home/background-home-mobile.jpg";

const Home = () => {
  return (
    <section className="home-container">
      <img src={mobileBg} alt="mobile" className="mobile-bg" />
      <div className="header-container">
        <h3 className="font-barlow text-base text-slate-300">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="font-bellefair text-8xl text-slate-200">SPACE</h1>
        <p className="font-barlow text-base max-w-sm text-slate-300 leading-6">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <button className="exploreButton">EXPLORE</button>
      </div>
    </section>
  );
};
export default Home;
