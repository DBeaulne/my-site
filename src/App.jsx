import './App.css';
import { HashRouter as HRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";


function App() {

  return (
    <HRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </HRouter>
  )
}

export default App
