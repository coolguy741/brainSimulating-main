import { Route, Routes } from 'react-router-dom';
import Pages from './pages';

function App() {
  const updateCursor = (e: any)=> {
    const mouseX = e.clientX - 12;
    const mouseY = e.clientY + 4;
    const cursor: any =  document.querySelector('.mouse_scroll');
    if(!cursor) return;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }
    
  return (
    <div className="App" onMouseMove={updateCursor}>
      <div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
      </div>
      <Routes>
        <Route path="/*" element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App;
