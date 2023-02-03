export async function getWeatherFrom(query = 'Madrid') {
  return fetch(`/api/get-weather?q=${query}`).then(res => res.json())
}
