import React, {Component} from 'react';
import ReactDropzone from "react-dropzone";

import style from './uploads.less';
import {Api} from "../../../../api/API";

class Uploads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            releases: '',
            updating: true,
            slugs: [],
            slugID: ''
        };
        this.onDrop = this.onDrop.bind(this);
        this.query = this.query.bind(this);
        this.releaseName = React.createRef();
        this.getReleases = this.getReleases.bind(this);
    }

    async getReleases(){
        let query = Api.getReleases();
        await query.then(res => {
            let {data} = res.data;
            this.setState({
                releases: data
            });
        });
    }

    async query() {
        let name = this.releaseName.current.value;
        let a = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu","і":"i","І":"I","'":"","`":"","є":"ie","Є":"IE"};

        if(name !== ''){
            let transliterate = (word) => {
                return word.split('').map(function (char) {
                    return a[char] || char;
                }).join("").replace(/[\W]/g,'-');
            };

            let transliterated = transliterate(name);
            let query = Api.newRelease(transliterated);
            await query.then(res => {
                this.getReleases();
            });
        }

    }

    async onDrop(files) {

        // POST to a test endpoint for demo purposes
        let query = Api.fileUploads(this.state.slugID, files);
        // await query.then(res => {
        //
        // });
        // const req = request.post('https://httpbin.org/post');

        // files.forEach(file => {
        //     query.attach(file.name, file);
        // });

        // query.end();
    };

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.releases !== nextState.releases){
            return true
        } else if(this.state.updating !== nextState.updating){
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
                                    <select name="" id="" onChange={(select) => this.setState({slugID: select.target.value})}>
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
