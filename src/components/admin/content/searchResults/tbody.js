import React, {Component} from 'react';
import style from "./searchResults.less";

class Tbody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.tableContent}>
                <div>
                    <div className={style.cols}>
                        <div>
                            <input type="checkbox"/>
                        </div>
                        <div className={style.allFilter}>
                            ico
                        </div>
                        <div>
                            ico
                        </div>
                        <div className={style.preview}>
                            <img src={require('../../../../static/img/rand1.png')} alt=""/>
                        </div>
                        <div><p>9999999999</p></div>
                        <div><p>Эдиториал</p></div>
                        <div className={style.name}><p>-----</p></div>
                        <div className={style.release}><p>Football World championship 2018</p></div>
                        <div className={style.lng}>
                            <span className={style.isset}>RU</span>
                            <span>UA</span>
                            <span>EN</span>
                            <span>DE</span>
                        </div>
                        <div><p>------</p></div>
                        <div><p>17-07-2018</p></div>
                        <div><p>17-07-2018</p></div>
                        <div><p>Publicated</p></div>
                    </div>
                    <div className={style.fullWidth}>
                        <p>
                            полоса - для - ключевых - слов/тегов - появляется - только - тогда, - когда - теги -
                            загружены - или - заполнены кстати, теги могут состоять из двух - трех слов... это надо
                            учесть
                        </p>
                        <button type="button">Все теги
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1866 -928 4 8" width="8" height="4">
                              <path id="Path_146" data-name="Path 146" className="cls-1"
                                    d="M1065.707,753.107h8l-3.93,4Z" fill="#505050"
                                    transform="translate(1112.893 145.707) rotate(-90)"/>
                            </svg>

                        </span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className={style.cols}>
                        <div>
                            <input type="checkbox"/>
                        </div>
                        <div className={style.allFilter}>
                            ico
                        </div>
                        <div>
                            ico
                        </div>
                        <div className={style.preview}>
                            <img src={require('../../../../static/img/rand1.png')} alt=""/>
                        </div>
                        <div><p>9999999999</p></div>
                        <div><p>Эдиториал</p></div>
                        <div className={style.name}><p>-----</p></div>
                        <div className={style.release}><p>Football World championship 2018</p></div>
                        <div className={style.lng}>
                            <span className={style.isset}>RU</span>
                            <span>UA</span>
                            <span>EN</span>
                            <span>DE</span>
                        </div>
                        <div><p>------</p></div>
                        <div><p>17-07-2018</p></div>
                        <div><p>17-07-2018</p></div>
                        <div><p>Publicated</p></div>
                    </div>
                </div>
                <div>
                    <div className={style.cols}>
                        <div>
                            <input type="checkbox"/>
                        </div>
                        <div className={style.allFilter}>
                            ico
                        </div>
                        <div>
                            ico
                        </div>
                        <div className={style.preview}>
                            <img src={require('../../../../static/img/rand1.png')} alt=""/>
                        </div>
                        <div><p>9999999999</p></div>
                        <div><p>Эдиториал</p></div>
                        <div className={style.name}><p>-----</p></div>
                        <div className={style.release}><p>Football World championship 2018</p></div>
                        <div className={style.lng}>
                            <span className={style.isset}>RU</span>
                            <span>UA</span>
                            <span>EN</span>
                            <span>DE</span>
                        </div>
                        <div><p>------</p></div>
                        <div><p>17-07-2018</p></div>
                        <div><p>17-07-2018</p></div>
                        <div><p>Publicated</p></div>
                    </div>
                    <div className={style.fullWidth}>
                        <p>
                            полоса - для - ключевых - слов/тегов - появляется - только - тогда, - когда - теги -
                            загружены - или - заполнены кстати, теги могут состоять из двух - трех слов... это надо
                            учесть
                        </p>
                        <button type="button">Все теги
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1866 -928 4 8" width="8" height="4">
                              <path id="Path_146" data-name="Path 146" className="cls-1"
                                    d="M1065.707,753.107h8l-3.93,4Z" fill="#505050"
                                    transform="translate(1112.893 145.707) rotate(-90)"/>
                            </svg>

                        </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tbody;
