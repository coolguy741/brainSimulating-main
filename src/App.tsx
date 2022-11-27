import { Route, Routes } from 'react-router-dom';
import Pages from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App;
