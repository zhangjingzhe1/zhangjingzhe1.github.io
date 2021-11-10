
import React, {useState, useEffect} from 'react'
import { Menu, Button, Row } from 'antd';
import {Link, connect} from 'umi';

import styles from './index.less';
import icons from '../iconfont/iconfont.css';
// import '../iconfont/iconfont'

const { SubMenu } = Menu;
function IndexPage(props) {
  useEffect(() => {
    props.getMenus()
  }, [])
  const {title, menus} = props;
  return (
    <div>
      <Row className={styles.title}> <div>{title}</div></Row>
      <div style={{ width: 188}}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
        >
          
          {
            menus.map((item, index) => {
              
              if(item.children) {
                return <SubMenu key="sub1" icon={<span className={`${icons.iconfont} ${icons[item.icon]}`}></span>} title={item.text}>
                  {
                    item.children.map((child, key) => {
                      <Menu.Item key={key}>
                        <Link to={child.link}>{child.text}</Link>
                      </Menu.Item>
                    })
                  }
              </SubMenu>
              } else {
                return <Menu.Item key={index} icon={<span className={`${icons.iconfont} ${icons[item.icon]}`}></span>}>
                <Link to={item.link}>{item.text}</Link>
              </Menu.Item>
              }
            })
          }
        </Menu>
      </div>
      <div className={styles.mainContent}>
      {props.children}
      </div>
    </div>
  );
}
const mapStateToProps = ({main}) => {
  return {
   ...main
  }
}
const dispatchToProps = dispatch => {
  return {
    getMenus(payload) {
      return dispatch({ type: 'main/getMenus', payload});
    }
  }
}
export default connect(mapStateToProps, dispatchToProps)(IndexPage);