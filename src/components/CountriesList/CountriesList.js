import { Link } from "react-router-dom"


function CountriesList({countries, setCountries}){


    const renderCountries = countries.map((country, index) => {
        return (
            <div key={index}>
                <Link to={`/${country.alpha3Code}`}>
                    <div className = "item-lista">
                        <div>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="..."/>
                            <p> {country.name.common}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })



    return (
        <div>
            <div>
                { renderCountries }
            </div>
        </div>
    )

}

export default CountriesList