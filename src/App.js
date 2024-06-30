import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chapter1Page from "./pages/Chapter1Page";
import MainPage from "./pages/MainPage";
import MacBookAir from "./components/MacBookAir";

function App() {
  return (
    <div className=" bg-[#E7E6E2]">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chapter-1" element={<Chapter1Page />} />
        <Route path="/macbook-air" element={<MacBookAir />} />
      </Routes>

      
    </div>
  );
}

export default App;
