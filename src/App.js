import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Home from "./routes/pages/Home";
const App = () => {
  return (
    <section className="root-container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="destination" element={"destination"} />
          <Route path="crew" element={"crew"} />
          <Route path="technology" element={"technology"} />
        </Route>
      </Routes>
    </section>
  );
};
export default App;
