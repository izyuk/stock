import React, {Component} from 'react';
import style from "./searchResults.less";

class Thead extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.thead}>
                <div>
                    <input type="checkbox"/>
                </div>
                <div className={style.allFilter}>
                    <select name="" id="">
                        <option value="1"
                                defaultValue>All
                        </option>
                        <option value="2">Not all</option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="1"
                                defaultValue>Status
                        </option>
                        <option value="2">Status 2</option>
                    </select>
                </div>
                <div className={style.preview}>
                    <label htmlFor="preview">
                        preview
                        <input id="preview" type="checkbox"/>
                    </label>
                </div>
                <div>
                    ID code
                </div>
                <div>
                    M-release
                </div>
                <div className={style.name}>
                    Name
                </div>
                <div className={style.release}>
                    <select name="" id="">
                        <option value="1" defaultValue>Release</option>
                        <option value="2">Not release</option>
                    </select>
                </div>
                <div>
                    LNG
                </div>
                <div>
                    <select name="" id="">
                        <option value="1" defaultValue>Category</option>
                        <option value="2">Not category</option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="1" defaultValue>Uploaded</option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="1" defaultValue>Publicated</option>
                    </select>
                </div>
                <div>
                    Action
                </div>
            </div>
        )
    }
}

export default Thead;
