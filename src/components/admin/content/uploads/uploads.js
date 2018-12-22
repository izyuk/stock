import React, {Component} from 'react';
import ReactDropzone from "react-dropzone";

import style from './uploads.less';
import {getReleases} from "../../../../api/API";
import sha1 from "sha1";
import axios from "axios";

class Uploads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            releases: '',
            updating: true,
            slugs: [],
            slugID: '',
            fileStatus: {}
        };
        this.onDrop = this.onDrop.bind(this);
        this.query = this.query.bind(this);
        this.releaseName = React.createRef();
        this.getReleases = this.getReleases.bind(this);
        this.Select = React.createRef();
        this.setRelease = this.setRelease.bind(this);
    }

    async getReleases() {
        let query = getReleases();
        await query.then(res => {
            let {data} = res.data;
            console.log(data);
            this.setState({
                releases: data
            });
        });

        this.setRelease();
    }

    async setRelease() {
        let onMountRelease = this.Select.current.value;
        console.log('onMountRelease', onMountRelease, '=======');
        this.setState({
            slugID: onMountRelease
        });
    }

    async query() {
        let name = this.releaseName.current.value;
        let a = {
            "Ё": "YO",
            "Й": "I",
            "Ц": "TS",
            "У": "U",
            "К": "K",
            "Е": "E",
            "Н": "N",
            "Г": "G",
            "Ш": "SH",
            "Щ": "SCH",
            "З": "Z",
            "Х": "H",
            "Ъ": "'",
            "ё": "yo",
            "й": "i",
            "ц": "ts",
            "у": "u",
            "к": "k",
            "е": "e",
            "н": "n",
            "г": "g",
            "ш": "sh",
            "щ": "sch",
            "з": "z",
            "х": "h",
            "ъ": "'",
            "Ф": "F",
            "Ы": "I",
            "В": "V",
            "А": "a",
            "П": "P",
            "Р": "R",
            "О": "O",
            "Л": "L",
            "Д": "D",
            "Ж": "ZH",
            "Э": "E",
            "ф": "f",
            "ы": "i",
            "в": "v",
            "а": "a",
            "п": "p",
            "р": "r",
            "о": "o",
            "л": "l",
            "д": "d",
            "ж": "zh",
            "э": "e",
            "Я": "Ya",
            "Ч": "CH",
            "С": "S",
            "М": "M",
            "И": "I",
            "Т": "T",
            "Ь": "'",
            "Б": "B",
            "Ю": "YU",
            "я": "ya",
            "ч": "ch",
            "с": "s",
            "м": "m",
            "и": "i",
            "т": "t",
            "ь": "'",
            "б": "b",
            "ю": "yu",
            "і": "i",
            "І": "I",
            "'": "",
            "`": "",
            "є": "ie",
            "Є": "IE"
        };

        if (name !== '') {
            let transliterate = (word) => {
                return word.split('').map(function (char) {
                    return a[char] || char;
                }).join("").replace(/[\W]/g, '-');
            };

            let transliterated = transliterate(name);
            let query = Api.newRelease(transliterated);
            await query.then(res => {
                this.getReleases();
            });
        }

    }

    async onDrop(files) {

        let URL = 'http://ec2-18-234-30-53.compute-1.amazonaws.com/stock-dev';
        let fileUploads = (releases, files) => {
            const API_TOKEN = sha1(`${URL}/public/api/releases/${releases}/videoxqg7j47xsiyesgywh7e6lexkld487w6opjcze6k2akbp6v6csy`);
            let myHeaders = new Headers({
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'api-token': API_TOKEN
            });
            // let formData = new FormData();
            console.log('files \n', files);
            // files.map((item, i) => {
            //     console.log(item);
            //     formData.append(`videos[${i}]`, item);
            // });
            // formData.append('videos[0]', files[0]);
            // console.log('formData \n', formData);

            const myUploadProgress = (myFileId, i) => (progress) => {
                let percentage = Math.round(progress.loaded / progress.total * 100);


                // let state = this.state.fileStatus.push([myFileId, percentage]);

                this.state.fileStatus[i] = {myFileId, percentage};
                this.props.uploadingInfo(this.state.fileStatus);
                console.log('fileStatus', this.state.fileStatus);
                return this.state.fileStatus;
            };
            let array = [];
            files.map((file, i) => {
                let formData = new FormData();
                formData.append(`videos[${i}]`, file);
                let config = {
                    mode: 'no-cors',
                    headers: myHeaders,
                    onUploadProgress: myUploadProgress(file, i)
                };

                array[i] = this.state.fileStatus[i];

                return axios.post(`${URL}/public/api/releases/${releases}/videos`, file, config)
                    .then(res => res)
                    .catch(err => console.warn('In uploading API method\n', err));
            });
            console.log('array', array);
            // for (let i=0; i<files.length; i++) {
            //     let formData = new FormData();
            //     formData.append(`videos[${i}]`, files[i]);
            //     let config = {
            //         mode: 'no-cors',
            //         headers: myHeaders,
            //         onUploadProgress: myUploadProgress(files[i])
            //     };
            //
            //     return axios.post(`${URL}/public/api/releases/${releases}/videos`, formData, config)
            //         .then(res => res)
            //         .catch(err => console.warn('In uploading API method\n', err));
            // }

            // return axios.post(`${URL}/public/api/releases/${releases}/videos`, formData, {
            //     mode: 'no-cors',
            //     headers: myHeaders,
            //
            //     // onUploadProgress: progressEvent => {
            //     //     let progress = Math.round(progressEvent.loaded / progressEvent.total * 100);
            //     //     console.log('Upload progress: ', progress + '%')
            //     //     // files.progress = progress;
            //     //     this.setState({
            //     //         fileStatus: {files, progress}
            //     //     });
            //     //     this.props.uploadingInfo({files, progress});
            //     // }
            // })
            //     .then(res => res)
            //     .catch(err => console.warn('In uploading API method\n', err));
        };


        fileUploads(this.state.slugID, files);
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.releases !== nextState.releases) {
            return true
        } else if (this.state.updating !== nextState.updating) {
            return true
        } else if (this.state.fileStatus !== nextState.fileStatus) {
            this.props.uploadingInfo(nextState.fileStatus);
            return true
        } else {
            return false
        }
    }

    componentDidMount() {
        this.getReleases();
    }

    render() {
        let data = this.state.releases && this.state.releases;
        return (
            <div className={style.uploadWrap}>
                <div className={style.uploadForm}>
                    <div className={style.form}>
                        <div className={style.head}>
                            <h3>Категории и релизы</h3>
                            <div>
                                <label htmlFor=""><p>Выбрать релиз</p>
                                    <select name="" id="" ref={this.Select}
                                            onChange={(select) => this.setState({slugID: select.target.value})}>
                                        {Array.from(this.state.releases).map((item, i) => {
                                            return (<option key={i} value={item.id} defaultChecked>{item.slug}</option>)
                                        })}
                                    </select>
                                </label>
                            </div>
                            <p>или</p>
                            <div>
                                <label htmlFor=""><p>Выбрать релиз</p>
                                    <input type="text" placeholder="Введите название релиза" ref={this.releaseName}/>
                                    <button type="button" onClick={this.query}>Сохранить</button>
                                </label>
                            </div>
                        </div>
                        <div className={style.dropDownArea}>
                            <ReactDropzone
                                onDrop={this.onDrop}
                            >
                                <p>Перетяните файлы сюда, чтобы загрузить</p>
                                <p className={style.or}>или</p>
                                <button type="button">Открыть файлы</button>
                            </ReactDropzone>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Uploads;
