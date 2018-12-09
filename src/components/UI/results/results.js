import React, {Component} from 'react';
import style from './results.less';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className={style.results}>
                <div className={style.wrap}>
                    <div className={style.itemsList}>
                        <div className={style.item}>
                            <img className={style.previewImage} src="" alt=""/>
                            <div className={style.hoveredActions}>
                                <span className={style.zoom}>i</span>
                                <div className={style.bottomLine}>
                                    <span className={style.time}>0:22</span>
                                    <div className={style.actions}>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <img className={style.previewImage} src="" alt=""/>
                            <div className={style.hoveredActions}>
                                <span className={style.zoom}>i</span>
                                <div className={style.bottomLine}>
                                    <span className={style.time}>0:22</span>
                                    <div className={style.actions}>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <img className={style.previewImage} src="" alt=""/>
                            <div className={style.hoveredActions}>
                                <span className={style.zoom}>i</span>
                                <div className={style.bottomLine}>
                                    <span className={style.time}>0:22</span>
                                    <div className={style.actions}>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <img className={style.previewImage} src="" alt=""/>
                            <div className={style.hoveredActions}>
                                <span className={style.zoom}>i</span>
                                <div className={style.bottomLine}>
                                    <span className={style.time}>0:22</span>
                                    <div className={style.actions}>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <img className={style.previewImage} src="" alt=""/>
                            <div className={style.hoveredActions}>
                                <span className={style.zoom}>i</span>
                                <div className={style.bottomLine}>
                                    <span className={style.time}>0:22</span>
                                    <div className={style.actions}>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <img className={style.previewImage} src="" alt=""/>
                            <div className={style.hoveredActions}>
                                <span className={style.zoom}>i</span>
                                <div className={style.bottomLine}>
                                    <span className={style.time}>0:22</span>
                                    <div className={style.actions}>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <img className={style.previewImage} src="" alt=""/>
                            <div className={style.hoveredActions}>
                                <span className={style.zoom}>i</span>
                                <div className={style.bottomLine}>
                                    <span className={style.time}>0:22</span>
                                    <div className={style.actions}>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                        <button type="button">i</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.bottomActions}>
                        <button className={style.next}>
                            Next
                        </button>
                        <div className={style.page}>
                            <span>Page</span>
                            <input type="number" defaultValue="120"/>
                            <span>of 80</span>
                            <div className={style.arrows}>
                                <button type="button" disabled>&lt;</button>
                                <button type="button">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;
