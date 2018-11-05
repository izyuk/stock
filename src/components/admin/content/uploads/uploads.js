import React, {Component} from 'react';
import ReactDropzone from "react-dropzone";

import style from './uploads.less';

class Uploads extends Component {
    constructor(props){
        super(props);
        this.state={

        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
        // POST to a test endpoint for demo purposes
        // const req = request.post('https://httpbin.org/post');
        //
        // files.forEach(file => {
        //     req.attach(file.name, file);
        // });
        //
        // req.end();
    };

    render(){
        return(
            <div className={style.uploadWrap}>
                <div className={style.uploadForm}>
                    <div className={style.form}>
                        <div className={style.head}>
                            <h3>Категории и релизы</h3>
                            <div>
                                <label htmlFor=""> <p>Выбрать категорию</p>
                                    <select name="" id="">
                                        <option value="0" defaultChecked> ---- </option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label htmlFor=""> <p>Выбрать релиз</p>
                                    <select name="" id="">
                                        <option value="0" defaultChecked> ---- </option>
                                    </select>
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
