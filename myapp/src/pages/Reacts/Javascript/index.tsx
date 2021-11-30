import React, {useEffect, useState} from 'react';
import { Input, Modal } from 'antd';
import {Link, connect} from 'umi';
import styles from './index.less';

export default function Javascript(props) {
  const {editMode, fource} = props; 
  console.log(props)
  return (
    <div className={styles.javascriptContent}>
      {
        React.cloneElement(props.children, {
          editMode,
          fource
         })
      }
    </div>
  );
}