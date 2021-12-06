
import React, {useState, useEffect} from 'react'
import { Menu, Modal, Row, Input } from 'antd';
import {Link, connect} from 'umi';

import styles from './index.less';
import icons from '../iconfont/iconfont.css';
// import '../iconfont/iconfont'

const { SubMenu } = Menu;
function IndexPage(props) {
  const {location} = props;
  const {pathname} = location;
  useEffect(() => {
    props.getMenus()
  }, [])
  const {title, menus} = props;
  const [editMode, setEditMode] = useState(false)
    const [fource, setpasd] = useState('')
    const getpasword = (e) => {
      setpasd(e.target.value)
    }
    useEffect(() => {
        let flag = [69,68,73,84,77,79,68,69];
        window.addEventListener('keydown', (e) => {
            const {keyCode} = e;
            if(keyCode === flag[0]) {
                flag.shift()
            } else {
                flag = [69,68,73,84,77,79,68,69];
            }
            if(!flag.length) {
                setEditMode(true)
                flag = [69,68,73,84,77,79,68,69];
                Modal.confirm({
                    title: '提示',
                    content: <div>进入编辑模式<Input type="password" onChange={getpasword}/></div>,
                    okText: '确认',
                    cancelText: '取消',
                });
            }
        })
    },[])
  return (
    <div style={{height: "100%"}}>
      {
        React.cloneElement(props.children, {
            editMode,
            fource,
         })
      }
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