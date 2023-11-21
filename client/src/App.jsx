import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='about' element={<Shop />} />
          <Route path='contact' element={<Shop />} />
          <Route path='product' element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
