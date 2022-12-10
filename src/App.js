import { Route, Routes } from "react-router-dom";
import Moon from "./components/destination/Moon.jsx";
import Navbar from "./routes/Navbar";
import Destination from "./routes/pages/Destination";
import Home from "./routes/pages/Home";

import Europa from "./components/destination/Europa.jsx";
import Mars from "./components/destination/Mars.jsx";
import Titan from "./components/destination/Titan.jsx";
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
          <Route path="crew" element={"crew"} />
          <Route path="technology" element={"technology"} />
        </Route>
      </Routes>
    </section>
  );
};
export default App;
