import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UploadPage from "./Pages/Upload/UploadPage";
import Header from "./components/Headers/Headers";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<Navigate to="/"/> } />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="*" element ={<Navigate to="/"/> } />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;