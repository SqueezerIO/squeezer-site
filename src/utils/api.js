import axios from 'axios'
import Promise from 'bluebird'

if (process.env.GIT_BRANCH === `master`) {
  axios.defaults.baseURL = 'https://platform.api.squeezer.network/prod'
} else {
  axios.defaults.baseURL = 'https://platform.api.squeezer.network/dev'
}

if (typeof localStorage !== "undefined") {
  axios.defaults.headers.common['x-access-token'] = localStorage.token
}

axios.interceptors.response.use((response) => {
  return response; 
}, (error) => { 
  if (error.response.status === 401 && window.location.pathname !== "/account/login/") {
    window.location = "/account/login/"
  }

  return Promise.reject(error);
})

export default axios