import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/topbar";
import Home from "./pages/home";
import Karyawan from "./pages/karyawan";
import DetailKaryawan from "./pages/detail-karyawan";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" name="Home" element={<Home />} />
        <Route path="karyawan" name="Karyawan" element={<Karyawan />}/>
        <Route path="karyawan/detail" name="Detail Karyawan" element={<DetailKaryawan/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
