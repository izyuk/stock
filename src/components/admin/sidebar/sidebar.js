import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import UploadingList from './uploadingList';

import style from './sidebar.less';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.nav = React.createRef();
    }

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
                <span>
            		<Link to="/admin/categories">Категории</Link>
            	</span>
                </nav>
                {window.location.pathname === '/admin/uploading' ?
                    <UploadingList uploadingInfo={this.props.uploadingInfo}/>
                    : ''}
            </div>
        )
    }
}

export default Sidebar;
