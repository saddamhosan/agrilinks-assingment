import { Route, Routes } from "react-router-dom";
import Business from "./Component/Business";
import Home from "./Component/Home";
import Review from "./Component/Review";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/business" element={<Business/>}/>
          <Route path="/review" element={<Review/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
