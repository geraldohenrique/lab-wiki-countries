import './CountryDetails.css';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { countryId } = useParams();

  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });

  //   const borders = [...foundCountry.borders]

  //   const renderBorders = countries
  //         .filter((oneCountry, index) => {
  //             return countries.alpha3Code === foundCountry.borders[index]
  //         })
  //         .map()

  return (
    <div >
      <div className="bandeira">
        <img
          src={`https://flagpedia.net/data/flags/icon/256x192/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="..."/>
      </div>

      <div className="card-body">
        <h2 className="card-title">{foundCountry.name.common}</h2>
        <p className="card-text">

        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Capital: {foundCountry.capital}</li>
        <li className="list-group-item">Area: {foundCountry.area}Km&sup2;</li>
        <li className="list-group-item">Borders: {foundCountry.borders}</li>
      </ul>
    </div>
  );
}

export default CountryDetails;
