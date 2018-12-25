import sha1 from 'sha1';
import axios from 'axios';
import {connect} from 'react-redux';

let URL = 'http://ec2-18-234-30-53.compute-1.amazonaws.com/stock-dev';

export const getCats = (level, parent_id) => {
    const API_TOKEN = sha1(`${URL}/public/api/categoriesxqg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy`);
    console.log(API_TOKEN);
    let myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-token': API_TOKEN
    });
    if(!parent_id) parent_id = undefined;
    return axios.get(`${URL}/public/api/categories?filter=level:${level} ${parent_id !== undefined ? ',parent_id:'+parent_id : '' }`, {
        mode: 'no-cors',
        headers: myHeaders
    })
        .then(res => res)
        .catch(err => console.warn('In getCategories API method\n', err));

};
export const newRelease = (slug) => {
    const API_TOKEN = sha1(`${URL}/public/api/releasesxqg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy`);
    let myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-token': API_TOKEN
    });
    return axios.post(`${URL}/public/api/releases`, {
        "title": {"en": "tst", "ru": "", "uk": ""},
        "slug": `${slug}`,
        "user_id": 1
    }, {
        mode: 'no-cors',
        headers: myHeaders
    })
        .then(res => res)
        .catch(err => console.warn('In uploading API method\n', err));
};
export const getReleases = () => {
    const API_TOKEN = sha1(`${URL}/public/api/releasesxqg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy`);
    console.log(API_TOKEN);
    let myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-token': API_TOKEN
    });
    return axios.get(`${URL}/public/api/releases`, {
        mode: 'no-cors',
        headers: myHeaders
    })
        .then(res => res)
        .catch(err => console.warn('In getReleases API method\n', err));
};

