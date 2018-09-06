import sha1 from 'sha1';

const URL = 'http://ec2-18-205-163-188.compute-1.amazonaws.com';

const Api = {
    getCats: async function () {
        const apiToken = await sha1(`${URL}/api/categoriesxqg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy`);
        console.log(apiToken);
        let myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'api-token': apiToken
        });

        const request = new Request(`${URL}/api/categories`, {
            method: 'GET',
            mode: 'no-cors',
            headers: myHeaders
        });

        return fetch(request)
            .then(res => res.json())
            .catch(err => err);
    }
    /*,

    another: function () {
        return fetch('http://api.horteca.com/api/objects?api_token=wTCDQleCEWCYrrVu', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res['result'])
            .catch(err => err);
    }*/
};


module.exports = {
    Api: Api
};