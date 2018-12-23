import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import UploadingList from './uploadingList';

import style from './sidebar.less';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
            upload: window.location.pathname === '/admin/uploading'
        };
        this.nav = React.createRef();
    }

    render() {
        // console.log('Sidebar', this.props.uploadingInfo);

            let uploadingInfo = this.props.uploadingInfo;

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
                    <span>
            		<Link to="/admin/categories">Категории</Link>
            	</span>
                </nav>
                {/*{window.location.pathname === '/admin/uploading' ?*/}
                {/*this.props.uploadingInfo && <UploadingList uploadingInfo={this.props.uploadingInfo}/>*/}
                {/*: ''}*/}

                {window.location.pathname === '/admin/uploading' &&
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
                            {uploadingInfo ?
                                Object.keys(uploadingInfo).map((item, i) => {
                                    // console.log(uploadingInfo[item]);
                                    // console.log(i);
                                    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
                                    if (uploadingInfo[item].myFileId.size === 0) return '0 Byte';
                                    let val = parseInt(Math.floor(Math.log(uploadingInfo[item].myFileId.size) / Math.log(1024)));
                                    let resultSize = Math.round(uploadingInfo[item].myFileId.size / Math.pow(1024, val), 2) + ' ' + sizes[val];
                                    return (
                                        <li key={i}>
                                            <p className={style.name}>
                                                {uploadingInfo[item].myFileId.name}
                                            </p>
                                            <div className={style.fileInfo}>
                                                <span className={style.size}>{resultSize}</span>
                                                <div className={style.progressBar}>
                                                    <span style={{width: `${uploadingInfo[item].percentage}%`}}>&nbsp;</span>
                                                </div>
                                                <a href="javascript:void(0)">&times;</a>
                                            </div>
                                        </li>
                                    )
                                })

                                : <span></span>
                            }


                            {/*<UploadingProcess/> && <UploadingProcess/>*/}

                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default Sidebar;
