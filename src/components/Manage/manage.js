import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ArticleHandle from "./article_handle";
import ArticleSync from './article_sync';
import Video from './video';
import Comment from './comment';

export default class Manage extends Component{
    render(){
        const { match } = this.props;
        return (
            <div className="manage">
                <Route path={`${match.url}/article_handle`} component={ArticleHandle} />
                <Route path={`${match.url}/article_sync`} component={ArticleSync} />
                <Route path={`${match.url}/video` } component={Video} />
                <Route path={`${match.url}/comment`} component={Comment} />
            </div>
        );
    }
}