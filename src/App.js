import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      {/* Add your <Nav /> or <Header /> here */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      {/* Add your <Footer /> here */}
    </BrowserRouter>
  );
}
export default App;