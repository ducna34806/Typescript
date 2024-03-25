import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Pay from "./components/Pay";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </Router>
  );
}

export default App;
