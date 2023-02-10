import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NewCountries from './components/Countries/NewCountries';
import CountryDetails from './components/Countries/CountyDetails';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewCountries />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
