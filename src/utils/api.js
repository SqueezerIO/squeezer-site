import axios from 'axios'
import Promise from 'bluebird'

// const apiBaseUrl = 'http://localhost:4001';
const apiBaseUrl = 'https://api.squeezer.io';

const apiGetSummary = () => {
  return new Promise((resolve) => {
    axios.get(`${apiBaseUrl}/rest/v1/token-sale/summary`).then((res) => {
      return resolve(res.data)
    })
  })
}

const apiAddNewTokenSalePurchase = (item) => {
  return new Promise((resolve) => {
    axios.post(`${apiBaseUrl}/rest/v1/token-sale/purchase/new`, item).then((res) => {
      return resolve(res.data)
    })
  })
}

const apiGetTokenSaleWhitelisted = (email) => {
  return new Promise((resolve) => {
    axios.get(`${apiBaseUrl}/rest/v1/token-sale/whitelisted?email=${email}`).then((res) => {
      return resolve(res.data)
    })
  })
}

export default { apiGetSummary , apiAddNewTokenSalePurchase, apiGetTokenSaleWhitelisted }