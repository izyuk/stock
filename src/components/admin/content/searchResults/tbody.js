import React, {Component} from 'react';
import style from "./searchResults.less";

class Tbody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tbody>
            <tr>
                <td className={style.allFilter}>
                    ico
                </td>
                <td>
                    ico
                </td>
                <td className={style.preview}>
                    <img src={require('../../../../static/img/rand1.png')} alt=""/>
                </td>
                <td>9999999999</td>
                <td>Эдиториал</td>
                <td className={style.name}>-----</td>
                <td className={style.release}>Football World championship 2018</td>
                <td className={style.lng}>
                    <span className={style.isset}>RU</span>
                    <span>UA</span>
                    <span>EN</span>
                    <span>DE</span>
                </td>
                <td>------</td>
                <td>17-07-2018</td>
                <td>17-07-2018</td>
                <td>Publicated</td>
            </tr>
            <tr>
                <td colSpan="12" className={style.fullWidth}>полоса  -  для  -  ключевых  -  слов/тегов  -  появляется  -  только  -  тогда,  -  когда  -  теги  -  загружены  -  или  -  заполнены кстати, теги могут состоять из двух - трех слов... это надо учесть
                    <button type="button">Все теги
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1866 -928 4 8" width="8" height="4">
                              <path id="Path_146" data-name="Path 146" className="cls-1" d="M1065.707,753.107h8l-3.93,4Z" fill="#505050" transform="translate(1112.893 145.707) rotate(-90)"/>
                            </svg>

                        </span>
                    </button></td>
            </tr>
            </tbody>
        )
    }
}

export default Tbody;