import React, {useEffect, useState} from 'react';
import { Button, Row } from 'antd';
import {Link, connect} from 'umi';
import styles from './index.less';
export default function Form(props) {
  return (
    <div>
      {
        props.children
      }
    </div>
  );
}
