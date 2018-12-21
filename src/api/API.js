import sha1 from 'sha1';
import axios from 'axios';
import {connect} from 'react-redux';

let URL = 'http://ec2-18-234-30-53.compute-1.amazonaws.com/stock-dev';

export const getCats = () => {
    const API_TOKEN = sha1(`${URL}/public/api/categoriesxqg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy`);
    console.log(API_TOKEN);
    let myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-token': API_TOKEN
    });
    return axios.get(`${URL}/public/api/categories`, {
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
// export const fileUploads = (releases, files) => {
//     const API_TOKEN = sha1(`${URL}/public/api/releases/${releases}/videoxqg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy`);
//     let myHeaders = new Headers({
//         'Content-Type': 'multipart/form-data',
//         'Accept': 'application/json',
//         'api-token': API_TOKEN
//     });
//     let formData = new FormData();
//     console.log('files \n', files);
//     formData.append('videos[0]', files[0]);
//     console.log('formData \n', formData);
//     return axios.post(`${URL}/public/api/releases/${releases}/videos`, formData, {
//         mode: 'no-cors',
//         headers: myHeaders,
//         onUploadProgress: progressEvent => {
//             let progress = Math.round(progressEvent.loaded / progressEvent.total * 100);
//             UPLOADING_REDUCER.collectingData(files.length, files[0].name, files[0].size, progress);
//
//             console.log('Upload progress: ', progress + '%')
//         }
//     })
//         .then(res => res)
//         .catch(err => console.warn('In uploading API method\n', err));
// };
