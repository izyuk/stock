import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './sidebar.less';

class Sidebar extends Component{
    render(){
        return(
            <nav>
            	<span>
            		<Link to="/control_panel">Control panel</Link>
            	</span>
            	<span className="hasSubmenu">
            		<Link to="/videos">Videos</Link>
            	</span>
            	<span>
            		<Link to="/tickets">Tickets</Link>
            	</span>
            </nav>
        )
    }
}

export default Sidebar;