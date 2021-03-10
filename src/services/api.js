import axios from 'axios'

const api = axios.create({
  baseURL: 'https://coronavirus-19-api.herokuapp.com'
})

function getCountry (country) {
  return api.get(`countries/${country}`)
    .then(response => response.data)
}

export default {
  getCountry
}
