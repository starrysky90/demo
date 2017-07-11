import React, { Component, PropTypes} from  'react';
import { Route, Link } from 'react-router-dom';

import Header from './header';
import Sider from './sider';
import Footer from './Footer';
import AsyncHomePage  from '../HomePage';
import AsyncManage from '../Manage';
import AsyncPublish from '../Publish';
import AsyncStat from '../Stat';
import AsyncMessage from '../Message';
import AsyncAccount from '../Account';
import AsyncHelp from '../Help';
import AsyncFeedback from '../Feedback';
import Login from '../Login';

export default class Layout extends Component{
    render(){
        const { match } = this.props;
        return (
            <div className="layout">
                <Header />
                <div className="wrapper">
                    <div className="main">
                        <Sider/>
                        <div className="content">
                            <Route path={`${match.url}/index`} component={ AsyncHomePage }/>
                            <Route path={`${match.url}/publish`} component={AsyncPublish} />
                            <Route path={`${match.url}/manage`} component={AsyncManage} />
                            <Route path={`${match.url}/stat`} component={AsyncStat} />
                            <Route path={`${match.url}/message`} component={AsyncMessage} />
                            <Route path={`${match.url}/account`} component={AsyncAccount} />
                            <Route path={`${match.url}/help`} component={AsyncHelp} />
                            <Route path={`${match.url}/feedback`} component={AsyncFeedback} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}