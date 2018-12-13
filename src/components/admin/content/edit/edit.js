import React, {Component} from 'react';
import style from "./edit.less";

class Edit extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className={style.editWrap}>
                <div className={style.columnPreview}>
                    <p className={style.headCount}>Выбранное видео (25 шт)</p>
                    <div className={style.headActions}>
                        <button className={style.add}>
                            <p className={style.icon}>ico</p>
                            <span>Добавить в выборку</span>
                        </button>
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
                    <div className={style.items}>
                        <div className={style.item}>
                            <div className={style.info}>
                                <span className={style.type}>ico</span>
                                <button className={style.actions}></button>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.info}>
                                <span className={style.type}>ico</span>
                                <button className={style.actions}></button>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.info}>
                                <span className={style.type}>ico</span>
                                <button className={style.actions}></button>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.info}>
                                <span className={style.type}>ico</span>
                                <button className={style.actions}></button>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.info}>
                                <span className={style.type}>ico</span>
                                <button className={style.actions}></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.columnEdit}>
                    <div className={style.editRow}>
                        <div className={style.head}>
                            <p>Описание и ключевые слова</p>
                            <div className={style.actionsSide}>
                                <button>
                                    <span className={style.ico}>ico</span>
                                    <span>Загрузить из CSV-файла</span>
                                </button>
                                <button>
                                    <span className={style.ico}>ico</span>
                                    <span>Выбрать образец</span>
                                </button>
                            </div>
                        </div>
                        <div className={style.form}>
                            <div className={style.label}>RU</div>
                            <div className={style.fields}>
                                <div className={style.row}>
                                    <p>Название </p>
                                    <input type="text"/>
                                </div>
                                <div className={style.row}>
                                    <p>Описание</p>
                                    <textarea defaultValue=''> </textarea>
                                </div>
                                <div className={style.row}>
                                    <p>Категория</p>
                                    <select name="" id="">
                                        <option value="----">----</option>
                                    </select>
                                </div>
                                <div className={style.row}>
                                    <p>Ключевые слова</p>
                                    <textarea defaultValue=''> </textarea>
                                </div>
                                <div className={style.row}>
                                    <p>Лицензия</p>
                                    <select name="" id="">
                                        <option value="----">----</option>
                                    </select>
                                    <div className={style.mod}>
                                        <p>Модел-релиз</p>
                                        <input type="checkbox"/>
                                        <span>(отметить, если нужен)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.editRow}>
                        <div className={style.head}>
                            <p>Размеры и цена</p>
                        </div>
                        <div className={style.dimensions}>
                            <p>640 x 480 px | 22.58 cm x 16.93 cm | 72 dpi | JPG</p>
                            <div className={style.currency}>
                                <p className={style.name}>USD</p>
                                <input type={style.number}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.editRow}>
                        <div className={style.head}>
                            <p>Модел-релизы</p>
                        </div>
                        <div className={style.count}>
                            <div className={style.models}>
                                <p>Моделей</p>
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className={style.modelsList}>
                                <div className={style.model}>
                                    <p className={style.name}>Модель 1</p>
                                    <div className={style.data}>
                                        <div className={style.item}>
                                            <p>Паспорт</p>
                                            <div className={style.field}></div>
                                        </div>
                                        <div className={style.item}>
                                            <p>Договор</p>
                                            <div className={style.field}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.model}>
                                    <p className={style.name}>Модель 2</p>
                                    <div className={style.data}>
                                        <div className={style.item}>
                                            <p>Паспорт</p>
                                            <div className={style.field}></div>
                                        </div>
                                        <div className={style.item}>
                                            <p>Договор</p>
                                            <div className={style.field}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.model}>
                                    <p className={style.name}>Модель 3</p>
                                    <div className={style.data}>
                                        <div className={style.item}>
                                            <p>Паспорт</p>
                                            <div className={style.field}></div>
                                        </div>
                                        <div className={style.item}>
                                            <p>Договор</p>
                                            <div className={style.field}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.model}>
                                    <p className={style.name}>Модель 4</p>
                                    <div className={style.data}>
                                        <div className={style.item}>
                                            <p>Паспорт</p>
                                            <div className={style.field}></div>
                                        </div>
                                        <div className={style.item}>
                                            <p>Договор</p>
                                            <div className={style.field}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.save}>
                        <button>
                            <span className={style.ico}></span>
                            <span>Сохранить</span>
                        </button>
                    </div>
                    <div className={style.otherActions}>
                        <button className={style.cancel}>
                            <span className={style.ico}></span>
                            <span>Отмена</span>
                        </button>
                        <div className={style.side}>
                            <button className={style.delay}>
                                <span className={style.ico}></span>
                                <span>Отложить публикацию</span>
                            </button>
                            <button className={style.publish}>
                                <span className={style.ico}></span>
                                <span>Опубликовать выбранное</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit;
