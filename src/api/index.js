import sha1 from 'sha1';

const URL = 'http://ec2-18-205-163-188.compute-1.amazonaws.com';

const Api = {
    getCats: function (data) {
        return fetch(`${URL}/api/categories`, {
            method: 'GET',
            mode: 'no-cors',
            // body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'API_Token': `${sha1(window.location.pathname + 'qg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy')}`
            }
        })
            .then(res => res.json())
            .catch(err => err);
    }
};


module.exports = {
    Api: Api
};