import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './sidebar.less';

class Sidebar extends Component{
    render(){
        return(
            <nav>
            	<span>
            		<Link to="/admin/panel">Панель управления</Link>
            	</span>
            	<span className="hasSubmenu">
            		<Link to="/admin/videos">Видео</Link>
            	</span>
				{/*<span className="hasSubmenu">*/}
            		{/*<Link to="/videos">Videos</Link>*/}
            	{/*</span>*/}
            	{/*<span>*/}
            		{/*<Link to="/tickets">Тикеты</Link>*/}
            	{/*</span>*/}
				<span>
            		<Link to="/admin/uploading">Загрузка файлов</Link>
            	</span>
            </nav>
        )
    }
}

export default Sidebar;