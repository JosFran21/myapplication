// ApiUtils.js
var ApiUtils = {  
  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};

export { ApiUtils as default };



// // Api.js
// import ApiUtils from './ApiUtils'
// var Api = {  
//   getItems: function() {
//     return fetch(someUrl)
//       .then(ApiUtils.checkStatus)
//       .then(response => response.json())
//       .catch(e => e)
//   },
//   .
//   .