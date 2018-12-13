import sha1 from 'sha1';
import axios from 'axios';

const URL = 'http://ec2-18-234-30-53.compute-1.amazonaws.com/stock-dev';
const API_TOKEN = sha1(`${URL}/public/api/categoriesxqg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy`);

let myHeaders = new Headers({
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'api-token': API_TOKEN
});

const Api = {
    getCats: async function () {

        return await axios.get(`${URL}/public/api/categories`, {
                mode: 'no-cors',
                headers: myHeaders
            })
            .then(res => res)
            .catch(err => console.warn('In getCategories API method\n', err));

    }
};


module.exports = {
    Api: Api
};
