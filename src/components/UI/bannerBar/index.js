import React, {Component} from 'react';
import style from './bannerBar.less';
import Banner from "./banner";
import SearchBar from "../searchBar/searchBar";
import ReviewPlans from './reviewPlans';
import Breadcrumbs from "../breadcrumbs/breadcrumbs";


class BannerBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.banner}>
                <Banner/>
                {window.location.pathname === '/' ?
                    <div>
                        <SearchBar style={style}/>
                        <ReviewPlans/>
                    </div>
                    :
                        <div className={style.bannerTextWrap}>
                            <div className={style.bannerText}>
                                <p className={style.head}>Лучшие спортивные фотографии высокого разрешения</p>
                                <p>Sportstock - ваш лучший источник спортивных высококачественных фотографий.
                                    Наша коллекция изображений откроет новые горизонты для ваших проектов
                                    и станет отличным решением с выгодными ценами.</p>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default BannerBar;
