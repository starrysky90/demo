import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import HeadTitle from "../Shared/headTitle";

class HeaderTab extends Component {
    constructor(props){
        super(props);
        this.state = { status : 0};
    }
    render(){
        let tabs = this.props.tabs.map((item,index) => {
            return (
                <a href="javascript:;" className="item" onClick={ () => { this.callback() }}>
                    {this.formatStatus()}
                </a>
            );
        });
        
    }
}

export default class ArticleHandle extends Component{
    loadTable = (arg) => {
        console.log(`change ${arg}`);
    }
    render(){
        return (
            <div className="article_handle">
                <HeadTitle title="手发文章管理">
                   <nav className="tab">
                        <a href="javascript:;" className="item" onClick={() => { this.loadTable(0)}}>
                            全部
                        </a>
                        <a href="javascript:;" className="item" onClick={() => { this.loadTable(4)}}>
                            已上线
                        </a>
                        <a href="javascript:;" className="item" onClick={() => { this.loadTable(5)}}>
                            已下线
                        </a>
                        <a href="javascript:;" className="item" onClick={() => { this.loadTable(3)}}>
                            审核中
                        </a>
                        <a href="javascript:;" className="item" onClick={() => { this.loadTable(1)}}>
                            草稿
                        </a>
                    </nav>
                </HeadTitle>
                <section>

                </section>
            </div>
        );
    }
}