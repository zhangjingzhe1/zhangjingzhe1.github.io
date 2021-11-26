import React, {useState, useEffect} from 'react'
import { Menu, Button, Row } from 'antd';
import {Link, connect} from 'umi';

import styles from './index.less';

function Note(props) {
    const {editMode, getData, setData} = props;
    const [bEdit, setEdit] = useState(false);
    useEffect(() => {
        setEdit(editMode)
    }, [editMode])
    useEffect(() => {
        getData({name: "javascript.note"})
    }, [])
  return (
    <div>
        <Row><span>JavaScript笔记</span></Row>
    </div>
  );
}
const mapStateToProps = ({main}) => {
    return {
     notes: main.javascriptnote
    }
  }
  const dispatchToProps = dispatch => {
    return {
        getData(payload) {
          return dispatch({ type: 'main/getData', payload});
        },
        setData(payload) {
          return dispatch({ type: 'main/setData', payload});
        }
      }
  }
  export default connect(mapStateToProps, dispatchToProps)(Note);