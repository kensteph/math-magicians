import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </div>
  );
}

export default App;
