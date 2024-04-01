import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SMSPage from "./pages/SMSPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/sms/:phoneNumber" element={<SMSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
