// export function getFlightsEndpoint(depOrArr = "dep", iataCode = "OTP") {
//   const querryParams = `?${depOrArr}_iata=${iataCode}&api_key=${process.env.REACT_APP_API_KEY}`;
//   return `https://airlabs.co/api/v9/schedules${querryParams}`;
// }

export function getFlightsEndpoint(depOrArr = "dep", iataCode = "OTP") {
  const querryParams = `${depOrArr}_iata=${iataCode}&api_key=${process.env.REACT_APP_API_KEY}.json`;
  return `http://localhost:3000/jsonTest/${querryParams}`;
}
