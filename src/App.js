import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chapter1Page from "./pages/Chapter1Page";
import MainPage from "./pages/MainPage";
import MacBookAir from "./components/MacBookAir";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/chapter-1" element={<Chapter1Page />} />
        <Route path="/macbook-air" element={<MacBookAir />} />
      </Routes>
    </div>
  );
}

export default App;
