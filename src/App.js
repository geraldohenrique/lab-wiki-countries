import './App.css';
import Navigationbar from './components/Navigationbar/Navigationbar';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countriesData from './countries.json';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navigationbar />
      <div className="container-fluid div-principal">
        <div className="lista-paises">
          <CountriesList countries={countries} />
        </div>
        <div>
          <Routes>
            <Route path="/:countryId" element={<CountryDetails countries={countries}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
