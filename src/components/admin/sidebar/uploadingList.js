import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {fileUploads} from '../../../api/API';

import style from './uploadingList.less';


class UploadingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: '',
            uploadStatus: ''
        };
        this.downloadsList = React.createRef();
    }

    componentDidMount() {
        console.log(this.props.uploadingInfo);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.list !== nextState.list) {
            return true
        } else if (this.props.uploadingInfo !== nextProps.uploadingInfo) {
            return true
        } else if (this.props.progress !== nextProps.progress) {
            return true
        } else {
            return false
        }
    }

    componentDidUpdate() {
        this.setState({
            list: this.props.uploadingInfo
        });
        this.setState({
            uploadStatus: this.props.uploadingInfo.progress
        });
        console.log('UploadingListComponentDidUpdate', this.state.list)
    }

    render() {
        let {list, uploadStatus} = this.state && this.state;
        console.log(list);
        return (
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
                    {/*{list ?*/}
                        {/*list.map((item, i) => {*/}
                            {/*console.log(item);*/}
                            {/*console.log('------------uploadStatus', uploadStatus);*/}
                            {/*let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];*/}
                            {/*if (item.size === 0) return '0 Byte';*/}
                            {/*let val = parseInt(Math.floor(Math.log(item.size) / Math.log(1024)));*/}
                            {/*let resultSize = Math.round(item.size / Math.pow(1024, val), 2) + ' ' + sizes[val];*/}
                            {/*return (*/}
                                {/*<li key={i}>*/}
                                    {/*<p className={style.name}>*/}
                                        {/*{item.name}*/}
                                    {/*</p>*/}
                                    {/*<div className={style.fileInfo}>*/}
                                        {/*<span className={style.size}>{resultSize}</span>*/}
                                        {/*<div className={style.progressBar}>*/}
                                            {/*<span style={{width: `${uploadStatus}%`}}>&nbsp;</span>*/}
                                        {/*</div>*/}
                                        {/*<a href="javascript:void(0)">&times;</a>*/}
                                    {/*</div>*/}
                                {/*</li>*/}
                            {/*)*/}
                        {/*})*/}

                        {/*: <span></span>*/}
                    {/*}*/}


                    {/*<UploadingProcess/> && <UploadingProcess/>*/}

                </ul>
            </div>
        )
    }
}

// export const UploadingProcess = (data) => {
//     if (data.items) {
//         for (let prop in data) {
//             let elem = data[prop];
//             return (
//                 <li>
//                     <p className={style.name}>
//                         {elem.name}
//                     </p>
//                     <div className={style.fileInfo}>
//                         <span className={style.size}>({elem.size} Gb)</span>
//                         <div className={style.progressBar}>
//                             <span style={{width: `${elem.progress}%`}}> </span>
//                         </div>
//                         <a href="javascript:void(0)">&times;</a>
//                     </div>
//                 </li>
//             )
//         }
//     }
//     else {
//         return <div></div>
//     }
// };

export default UploadingList;
