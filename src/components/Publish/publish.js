import React, { Component } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import HeadTitle from "../Shared/headTitle";
import PublishArticle from './article';
import PublishVideo from './video';
import PublishAtlas from './atlas';

export default class Publish extends Component{
    
    render(){
        const { match } = this.props;
        return (
            <div className="publish">
                <HeadTitle title="发布">
                    <nav className="tab">
                        <NavLink className="item" activeClassName="item_active" to="/home/publish/article">
                            文章
                        </NavLink>
                        <NavLink className="item" activeClassName="item_active" to="/home/publish/video">
                            视频
                        </NavLink>
                        <NavLink className="item" activeClassName="item_active" to="/home/publish/atlas">
                            图集
                        </NavLink>
                    </nav>
                </HeadTitle>
                <section className="publish_form">
                        <Route path={`${match.url}/article`} component={PublishArticle}/>
                        <Route path={`${match.url}/video`} component={PublishVideo}/>
                        <Route path={`${match.url}/atlas`} component={PublishAtlas}/>
                        <Redirect from={match.url} to={`${match.url}/article`} />
                </section> 
            </div>
        );
    }
}