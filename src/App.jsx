
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailsForm from "./components/DetailsForm";
import ThankYou from "./pages/ThankYou";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
