import React, {Component} from 'react';
import style from "./searchResults.less";

class Thead extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <thead>
            <tr>
                <th className={style.allFilter}>
                    <select name="" id="">
                        <option value="1"
                                defaultValue>All
                        </option>
                        <option value="2">Not all</option>
                    </select>
                </th>
                <th>
                    <select name="" id="">
                        <option value="1"
                                defaultValue>Status
                        </option>
                        <option value="2">Status 2</option>
                    </select>
                </th>
                <th className={style.preview}>
                    <label htmlFor="preview">
                        preview
                        <input id="preview" type="checkbox"/>
                    </label>
                </th>
                <th>
                    ID code
                </th>
                <th>
                    M-release
                </th>
                <th className={style.name}>
                    Name
                </th>
                <th className={style.release}>
                    <select name="" id="">
                        <option value="1" defaultValue>Release</option>
                        <option value="2">Not release</option>
                    </select>
                </th>
                <th>
                    LNG
                </th>
                <th>
                    <select name="" id="">
                        <option value="1" defaultValue>Category</option>
                        <option value="2">Not category</option>
                    </select>
                </th>
                <th>
                    <select name="" id="">
                        <option value="1" defaultValue>Uploaded</option>
                    </select>
                </th>
                <th>
                    <select name="" id="">
                        <option value="1" defaultValue>Publicated</option>
                    </select>
                </th>
                <th>
                    Action
                </th>
            </tr>
            </thead>
        )
    }
}

export default Thead;