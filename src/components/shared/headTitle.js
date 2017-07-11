import React , { Component , PropTypes } from 'react';

export default class HeadTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="head_title">
               <span className="title">{this.props.title}</span>
               {this.props.children}
            </div>
        );
    }
}