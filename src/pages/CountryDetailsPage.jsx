import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"

function CountryDetails() {
    const [countryDetails, setCountryDetails] = useState(null);

    const param = useParams();
    console.log(param.alpha3Code)

    useEffect(() => {
        getData()
    }, [param.alpha3Code])

    // llamada a la API externa con async await
    //https://ih-countries-api.herokuapp.com/countries/
    const getData = async () => {
        try {
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${param.alpha3Code}`)
            console.log(response)
            setCountryDetails(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // clausula de guardia
    if (countryDetails === null) {
        return <h3>...Loading...</h3>
    }

    const countryCode = countryDetails.alpha2Code.toLowerCase();


    return (
        <>
            <h2>Country details</h2>
            <p><img src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`} width={150} /></p>
            <h4>{countryDetails.name.official}</h4>
            <hr />
            <p><strong>Capital:</strong> {countryDetails.capital}</p>
            <hr />
            <p><strong>Area:</strong> {countryDetails.capital} km2</p>
            <hr />
            <p><strong>Borders:</strong></p>
            {console.log(countryDetails.boders)}

            {countryDetails.borders.map((eachBorder) => {
                return (
                    <>
                        <Link to={`/${eachBorder}`}>
                            <li>{eachBorder}</li>
                        </Link>
                    </>
                )
            })}
            <hr />
        </>
    )
}

export default CountryDetails;
