const t = require('tap');
const fetch = require('node-fetch');
const {getPeopleAsync, getPeoplePromised} = require('../fetch');

t.test('it calls the api to get the people', t => {
    getPeopleAsync(fetch).then(res => {
        t.test('check result', t => {
            t.equal(res.count, 87)
            t.end();
        })
    });
}
)


