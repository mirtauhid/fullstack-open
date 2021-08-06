import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('')
  const [show, setShow] = useState('')
  const [data, setData] = useState({})
  const [weather, setWeather] = useState({})

  useEffect(() => {
    if (search !== '') {
      axios.get('https://restcountries.eu/rest/v2/all').then(res => {
        const filteredData = res.data.filter(country => country.name.toLowerCase().includes(search?.toLowerCase()));
        setCountries(filteredData);
      })
      if (show !== '') {
        const foundCountry = countries.find(country => country.name.toLowerCase() === show.toLowerCase());
        setData(foundCountry);
        axios.get(`http://api.weatherstack.com/current?access_key=d01769715642a61854f7a6408f9c4013&query=${foundCountry.capital}`).then(res => {
          setWeather(res.data)
        })
      }
    }
  }, [search, show])




  console.log(weather)


  return (
    <div>
      <br />
      find countries <input onChange={(event) => setSearch(event.target.value)} />
      <br />
      {
        countries.length <= 10 ? (
          countries.length === 1 ? (
            <div>
              {
                countries.map(country => {
                  return (
                    <div>
                      <h1>{country.name}</h1>
                      <br />
                      <p>capital: {country.capital}</p>
                      <p>population: {country.population}</p>
                      <br />
                      <h2>languages</h2>
                      {
                        country.languages.map(language => <ul><li>{language.name}</li></ul>)
                      }
                      <br />
                      <img style={{ width: "200px" }} src={country.flag} alt="flag" />
                    </div>
                  )
                })
              }
            </div>
          ) : (
            <div>
              {
                countries.map((country => {
                  return (<div><p>{country.name}</p><button onClick={() => setShow(country.name)} >show</button></div>)
                }))
              }
              {
                data.name && (<div>
                  <h1>{data.name}</h1>
                  <br />
                  <p>capital: {data.capital}</p>
                  <p>population: {data.population}</p>
                  <br />
                  <h2>Spoken languages</h2>
                  {
                    data.languages?.map(language => <ul><li>{language.name}</li></ul>)
                  }
                  <img style={{ width: "200px" }} src={data.flag} alt="flag" />
                  <h2>Weather in {data?.capital}</h2>
                  <br />

                  <p>temperature: {weather.current?.temperature} celsius</p>
                  {weather.current?.weather_icons?.map(icon => {
                    return (<img src={icon} alt="icon" />)
                  })}
                  <p>wind: {weather.current?.wind_speed} mph direction {weather.current?.wind_dir}</p>

                </div>)
              }
            </div>
          )
        ) : (
          <div>
            <p>Too many matches, specify another filter</p>
          </div>
        )
      }
    </div>
  );
};

export default App;