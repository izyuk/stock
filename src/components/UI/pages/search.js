import React, {Component} from 'react';
import SearchData from "../search/search";
import Results from "../results/results";
import Header from "../header";
import LogoBar from '../logoBar/logoBar';
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import PopularCategories from "../popularCategories";
import Footer from '../footer'

class Search extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <Header />
                <LogoBar path={window.location.pathname}/>
                <Breadcrumbs/>
                <SearchData/>
                <Results/>
                <PopularCategories/>
                <Footer/>
            </div>
        )
    }
}

export default Search;
