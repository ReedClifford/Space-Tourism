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

import Tech1 from "./components/technology/Tech1";
import Tech2 from "./components/technology/Tech2";
import Tech3 from "./components/technology/Tech3";
import TechnologyPage from "./routes/pages/TechnologyPage";
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
          <Route path="technology" element={<TechnologyPage />}>
            <Route index element={<Tech1 />} />
            <Route path="2" element={<Tech2 />} />
            <Route path="3" element={<Tech3 />} />
          </Route>
        </Route>
      </Routes>
    </section>
  );
};
export default App;
