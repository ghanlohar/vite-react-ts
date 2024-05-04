import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home';
import KanhaiyaHome from './KanhaiyaHome';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drkanhaiya" element={<KanhaiyaHome />} />
        <Route path="*" element={<KanhaiyaHome />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
