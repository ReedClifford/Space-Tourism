import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Home from "./routes/pages/Home";

import Crew1 from "./components/crews/Crew1.jsx";
import Crew2 from "./components/crews/Crew2.jsx";
import Crew3 from "./components/crews/Crew3";
import Crew4 from "./components/crews/Crew4";
import CrewPage from "./routes/pages/CrewPage.jsx";

import Europa from "./components/destination/Europa.jsx";
import Mars from "./components/destination/Mars.jsx";
import Moon from "./components/destination/Moon.jsx";
import Titan from "./components/destination/Titan.jsx";
import Destination from "./routes/pages/DestinationPage";
const App = () => {
  return (
    <section className="root-container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>
          <Route path="crew" element={<CrewPage />}>
            <Route index element={<Crew1 />} />
            <Route path="crew2" element={<Crew2 />} />
            <Route path="crew3" element={<Crew3 />} />
            <Route path="crew4" element={<Crew4 />} />
          </Route>
          <Route path="technology" element={"technology"} />
        </Route>
      </Routes>
    </section>
  );
};
export default App;
