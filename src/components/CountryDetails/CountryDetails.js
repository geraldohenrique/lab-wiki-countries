import './CountryDetails.css';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { countryId } = useParams();

  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });
  
  const foundBorders = (border) => countries.find((oneCountry) => {
    return oneCountry.alpha3Code === border;
  });

  
  return (
    <div className="div-detalhes">
      <div className="bandeira">
        <img
          src={`https://flagpedia.net/data/flags/icon/256x192/${foundCountry.alpha2Code.toLowerCase()}.png`}
          alt="..."
        />
      </div>

      <div className="card-body">
        <h2 className="card-title">{foundCountry.name.common}</h2>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Capital:</b> {foundCountry.capital}</li>
        <li className="list-group-item"><b>Area:</b> {foundCountry.area}Km&sup2;</li>
        <li className="list-group-item"><b>Borders:</b> {foundCountry.borders.map((border) =>{
          return(             
                  <Link to={`/${border}`}><br></br>{foundBorders(border).name.common} </Link>
            )
        })}
       </li>
      </ul>
    </div>
  );
}

export default CountryDetails;
