import ListGroup from 'react-bootstrap/ListGroup';

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function HomePage() {

    const [allCountries, setAllCountries] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    // funcion para llamar a la API con async await
    const getData = async () => {
        try {
            const response = await axios.get(" https://ih-countries-api.herokuapp.com/countries")
            setAllCountries(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // clausula de guardia
    if (allCountries === null) {
        return <h3>...Loading...</h3>
    }

    // ordeno los paises alfabeticamente antes de pasarlos a la vista
    const sortedCountries = allCountries.slice().sort((a, b) => {
        return a.name.official.localeCompare(b.name.official);
    });

    return (
        <>
            <h2>WikiCountries: Your Guide to the World!</h2>
            <ListGroup>
                {sortedCountries.map((eachCountry) => {
                    const countryCode = eachCountry.alpha2Code.toLowerCase();
                    return (
                        <>
                            <ListGroup.Item key={eachCountry.name.official} action>
                                <Link to={`/${eachCountry.alpha3Code}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`} width={40} />
                                    <p>{eachCountry.name.official}</p>
                                </Link>
                            </ListGroup.Item>
                        </>
                    )
                })}
            </ListGroup>
        </>

    )
}

export default HomePage;
