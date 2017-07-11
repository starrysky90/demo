import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import {HeadTitle, HeadTab} from "../Shared/breadCrumb";

const NavData = [
    {
        status:0,
        name:"全部"
    },
    {
        status:4,
        name:"已上线"
    },
    {
        status:5,
        name:"已下线"
    },
    {
        status:3,
        name:"审核中"
    },
    {
        status:1,
        name:"草稿"
    }
];

export default class ArticleHandle extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeKey:0
        }
    }
    loadTable = (status) => {
       console.log(`status:${status}`);
    }
    render(){
        return (
            <div className="article_handle">
                <HeadTitle title="手发文章管理">
                  <HeadTab data={NavData} callback={this.loadTable} />
                </HeadTitle>
                <section>

                </section>
            </div>
        );
    }
}

//  <nav className="tab">
//                         {NavData.map((item,index) => {
//                             return (
//                                 <a href="javascript:;" key={index} className={index === this.state.activeKey?"item item_active":"item"} onClick={() => { this.loadTable(item.status,index)}}>
//                                     {item.name}
//                                 </a>
//                             );
//                         })}
//                     </nav>