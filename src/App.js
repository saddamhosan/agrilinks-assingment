import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Business from "./Component/Business";
import Home from "./Component/Home";
import Review from "./Component/Review";

export const DetailContext = createContext({});
function App() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(
      "https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco"
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      <DetailContext.Provider value={details}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/business" element={<Business />} />
            <Route path="/review" element={<Review />} />
          </Route>
        </Routes>
      </DetailContext.Provider>
    </div>
  );
}

export default App;
