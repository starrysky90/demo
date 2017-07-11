import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class HomePage extends Component{
    render(){
        return (
            <div className="home_page">
                <section className="top">
                    <div className="publish">
                        <Link to="/home/publish/article">发布</Link>
                    </div>
                    <div className="stat">
                        <ul>
                            <li>
                                <p>13.8万</p>
                                <p>总阅读量</p>
                            </li>
                            <li>
                                <p>3244</p>
                                <p>总评论数</p>
                            </li>
                            <li>
                                <p>183</p>
                                <p>总发布数</p>
                            </li>
                            <li>
                                <p>153</p>
                                <p>总订阅数</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <a className="banner" href="javascript:;">
                    <img src="/asset/images/banner.jpg" alt="banner" />
                </a>
                <section className="notice">
                    <div className="notice_header">
                        <span className="title"></span>
                        <span className="line"></span>
                    </div>
                </section>
            </div>
        );
    }
}