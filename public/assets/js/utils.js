const axios = require('axios');

module.exports = {
  pleaseWork: function() {
    console.log('pleaseWork')
    return axios.get(`/api/mealApp/`)
  }
}