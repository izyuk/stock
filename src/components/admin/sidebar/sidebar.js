import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import style from './sidebar.less';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.downloadsList = React.createRef();
        this.nav = React.createRef();
    }

    // componentDidMount() {
    //     console.log('mount props', this.props.path);
    //     if (window.location.pathname === '/admin/uploading') {
    //         let height = this.downloadsList.current.offsetHeight + 107;
    //         console.log(this.downloadsList.current.offsetHeight);
    //         console.log(height);
    //         console.log(this.nav);
    //         this.nav.current.style.height = `calc(100vh - ${height}px)`;
    //         console.log(this.nav.current.style.height);
    //     } else {
    //         this.nav.current.removeAttribute('style');
    //     }
    // }
    //
    // componentDidUpdate(){
    //     console.log('uptate props', this.props.path);
    //     if (window.location.pathname === '/admin/uploading') {
    //         let height = this.downloadsList.current.offsetHeight + 107;
    //         console.log(this.downloadsList.current.offsetHeight);
    //         console.log(height);
    //         console.log(this.nav);
    //         this.nav.current.style.height = `calc(100vh - ${height}px)`;
    //         console.log(this.nav.current.style.height);
    //     } else {
    //         this.nav.current.removeAttribute('style');
    //     }
    // }

    render() {
        return (
            <div className={style.sidebarWrap}>
                <nav ref={this.nav}>
            	<span>
            		<Link to="/admin/panel">Панель управления</Link>
            	</span>
                    <span className="hasSubmenu">
            		<Link to="/admin/videos">Видео</Link>
            	</span>
                    <span>
            		<Link to="/admin/uploading">Загрузка файлов</Link>
            	</span>
                </nav>
                {window.location.pathname === '/admin/uploading' ?
                    <div ref={this.downloadsList} className={style.downloadsList}>
                        <div className={style.uploadingInfo}>
                            <ul>
                                <li>Прогресс загрузки
                                    <ul>
                                        <li>Ожидают загрузки: <span>15</span></li>
                                        <li>Успешно загружено: <span>8</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <ul className={style.items}>
                            <li>
                                <p className={style.name}>
                                    very-very-long-filename_12-09-2018_soccer_world_cup_2018.mov
                                </p>
                                <div className={style.fileInfo}>
                                    <span className={style.size}>(1,4 Gb)</span>
                                    <div className={style.progressBar}>
                                        <span style={{width: '25%'}}></span>
                                    </div>
                                    <a href="javascript:void(0)">&times;</a>
                                </div>
                            </li>
                            <li>
                                <p className={style.name}>
                                    filename_12-09-2018_soccer.mov
                                </p>
                                <div className={style.fileInfo}>
                                    <span className={style.size}>(485 Mb)</span>
                                    <div className={style.progressBar}>
                                        <span style={{width: '25%'}}></span>
                                    </div>
                                    <a href="javascript:void(0)">&times;</a>
                                </div>
                            </li>
                            <li>
                                <p className={style.name}>
                                    very-very-long-filename_12-09-2018_soccer_world_cup_2018.mov
                                </p>
                                <div className={style.fileInfo}>
                                    <span className={style.size}>(1,4 Gb)</span>
                                    <div className={style.progressBar}>
                                        <span style={{width: '25%'}}></span>
                                    </div>
                                    <a href="javascript:void(0)">&times;</a>
                                </div>
                            </li>

                        </ul>
                    </div>
                    : ''}
            </div>
        )
    }
}

export default Sidebar;
