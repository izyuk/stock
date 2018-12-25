import React, {Component} from 'react';
import style from './categories.less';

import {getCats} from '../../../../api/API';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: {}
        };
        this.getCategoriesList = this.getCategoriesList.bind(this);
    }

    async getCategoriesList(level, parent_id) {
        let query = getCats(level, parent_id);
        await query.then(res => {
            let {data} = res.data;
            console.log(data);
            if (level === 0) this.state.categoriesList = data;
            else this.state[`children_${level}`] = data;
        });
        this.forceUpdate();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.categoriesList !== nextState.categoriesList) {
            return true
        } else {
            return true
        }
    }

    componentDidMount() {
        this.getCategoriesList(0);
    }

    componentDidUpdate() {

    }

    render() {
        let list = this.state.categoriesList && this.state.categoriesList;
        console.log(this.state);
        return (
            <div className={style.categoriesWrap}>
                <div className={style.left}>
                    <p className={style.title}>Добавить новую категорию</p>
                    <div className={style.form}>
                        <div className={style.catName}>
                            <div className={style.head}>
                                <p className={style.text}>Название категории (RU)</p>
                                <input type="text"/>
                                <span>(название - как оно будет отображаться на сайте)</span>
                            </div>
                            <div className={style.additional}>
                                <div className={style.addRow}>
                                    <div className={style.item}>
                                        <p className={style.label}>UA</p>
                                        <input type="text"/>
                                    </div>
                                    <div className={style.item}>
                                        <p className={style.label}>EN</p>
                                        <input type="text"/>
                                    </div>
                                    <div className={style.item}>
                                        <p className={style.label}>DE</p>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.slag}>
                            <div className={style.enterName}>
                                <p className={style.text}>Слаг</p>
                                <input type="text"/>
                                <span>(совмещенная с URL-ссылкой версия названия категории)</span>
                            </div>
                            <div className={style.chooseCat}>
                                <p>Родительская категория</p>
                                <div>
                                    <select>
                                        <option value="-----">-----</option>
                                    </select>
                                    <span>(если эта категория должна стать родительской - оставить поле пустым)</span>
                                </div>
                            </div>
                        </div>

                        <div className={style.keyWords}>
                            <p>Ключевые слова</p>
                            <textarea defaultValue=" "></textarea>
                            <div className={style.additional}>
                                <div className={style.addRow}>
                                    <div className={style.item}>
                                        <p className={style.label}>UA</p>
                                        <textarea defaultValue=" "></textarea>
                                    </div>
                                    <div className={style.item}>
                                        <p className={style.label}>EN</p>
                                        <textarea defaultValue=" "></textarea>
                                    </div>
                                    <div className={style.item}>
                                        <p className={style.label}>DE</p>
                                        <textarea defaultValue=" "></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.image}>
                            <div>
                                <p>Миниатюра</p>
                                <div className={style.preview}>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                            <button type="button">Загрузить / Добавить изображение</button>
                            <input type="file"/>
                        </div>

                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.head}>
                        <p>Категории</p>
                        <div className={style.paginationWrap}>
                            <div className={style.show}>
                                <span>Показывать по</span>
                                <select name="" id="">
                                    <option value="20">20</option>
                                </select>
                            </div>
                            <div className={style.pagination}>
                                <button className={style.bk}></button>
                                <span className={style.range}>1-20</span>
                                <button className={style.fd}></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.catLists}>
                        <div className={style.treeHead}>
                            <div className={style.left}>
                                <p>Порядок</p>
                                <div className={style.wrapper}>
                                    <p>Название</p>
                                    <button type="button">ico</button>
                                </div>
                            </div>
                            <div className={style.right}>
                                <div className={style.slag}>
                                    <p>Слаг</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.tree}>
                            {list ?
                                Object.keys(list).map((item, i) => {
                                    let {id, level, parent_id, title, slug, preview} = list[item];
                                    console.log(list[item]);
                                    return (
                                        <Item id={id}
                                              level={level}
                                              parent_id={parent_id}
                                              title={title}
                                              slug={slug}
                                              preview={preview}
                                              key={i}/>
                                    )
                                }) : 'Categories are not defined !'
                            }
                        </div>
                    </div>
                    <div className={style.footer}>
                        <div className={style.pagination}>
                            <button className={style.bk}></button>
                            <span className={style.range}>1-20</span>
                            <button className={style.fd}></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const Item = ({id, level, parent_id, title, slug, preview}) => {
    return (
        <div className={[style.item, level > 0 ? style.sub : ''].join(' ')}
             data-id={id}>
            <div>
                <div className={style.info}>
                    <button className={style.changeOrder}
                            type="button"
                            onClick={(button) => Categories.prototype.getCategoriesList(1 + parseInt(level), id)}>ico
                    </button>
                    <div className={style.itemPreview}>
                        <img src={preview['100x60']} alt=""/>
                    </div>
                    <p>
                        <span>{title}</span>
                        <button className={style.up} type="button">icon</button>
                    </p>
                </div>
            </div>
            <div className={style.actions}>
                <div>
                    <span className={style.path}>/{slug}</span>
                    <button className={style.edit} type="button">Редактировать</button>
                    <button className={style.delete} type="button">Удалить</button>
                </div>
            </div>
        </div>
    )
};

export default Categories;
