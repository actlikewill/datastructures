const fetch = require('node-fetch');

const getPeoplePromised  = fetch => fetch('https://swapi.co/api/people')
                            .then(res => res.json())
                            .then(data =>  data);


const getPeopleAsync = async fetch => {
    const getRequest = await fetch('https://swapi.co/api/people');
    const data = await getRequest.json();
    return data;
}



module.exports = {
    getPeopleAsync,
    getPeoplePromised
}
