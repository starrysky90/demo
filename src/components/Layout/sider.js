import React, { Component } from 'react';
import {NavLink,Nav} from 'react-router-dom';
import { Menu , Icon } from 'antd';
import menus from '../../config/menu';

const menuList = menus.map((item,i) =>{
    return (
      <li className={`menu_item ${item.className}`} key={item.key}>
        {item.child?
            (<div>
              <i className="icon"></i>
              <span className="text">{item.name}</span>
              <Icon type="caret-down" style={{fontSize:"10px",color:"#FD8989",marginLeft:"10px"}} />
              <ul className="menu_sub">
                {item.child.map((node) => {
                  return (<li key={node.key}>
                            <Icon type="right" style={{fontSize:"10px",color:"#666",marginRight:"2px"}}/>
                            <NavLink to={node.url} activeClassName="link_active">{node.name}</NavLink>
                        </li>);
                })}
              </ul>
            </div>):
            <div>
               <i className="icon"></i>
               <NavLink key={item.key} to={item.url} className="text" activeClassName="link_active">{item.name}</NavLink>
            </div>
        }
      </li>
    );
});

export default class Sider extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.setMenuActive();
  }
  componentDidUpdate(){
    this.setMenuActive();
  }
  setMenuActive(){
    // console.log(window.location.pathname);
    $("li.menu_item").removeClass("active");
    $(".link_active").parents("li.menu_item").addClass("active");
  }
  render() {
    return (
      <ul className="sider">
        {menuList}
      </ul>
    );
  }
}
