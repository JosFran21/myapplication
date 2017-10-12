var api = {
     getRovers(){
         var url = `http://localhost:8000/api/register/fake`;
         return fetch(url).then((res)=> res.json());
     }
};

module.exports = api;