import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'antd';
import {Link, connect} from 'umi';
import styles from './index.less';

export default function Javascript(props) {
    const [editMode, setEditMode] = useState(false)
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
                    content: '进入编辑模式',
                    okText: '确认',
                    cancelText: '取消',
                });
            }
        })
    },[])
  return (
    <div>
      {
        React.cloneElement(props.children, {
            editMode
         })
      }
    </div>
  );
}