import { Route, Routes } from 'react-router-dom';
import Pages from './pages';

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path="/*" element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App;
