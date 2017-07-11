import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import {HeadTitle} from "../Shared/breadCrumb";

export default class Account extends Component{
    render(){
        return (
            <div className="Account">
                <HeadTitle title="账号信息" />
            </div>
        );
    }
}