import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Request from "./Components/Requets.js";
import Request_detail from "./Components/Request_detail.js";
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Request />} />
      <Route path="/requestdetail" element={<Request_detail />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
