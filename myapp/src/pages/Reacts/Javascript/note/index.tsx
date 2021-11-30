import React, {useState, useEffect} from 'react'
import { Input, Modal, Row, Form, Button, Spin } from 'antd';
import {Link, connect} from 'umi';

import Page from "../components/Page"

import styles from './index.less';

const {TextArea} = Input;
const {Item} = Form;
function Note(props) {
    const {editMode, getData, setData, notes, fource} = props;
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getData({name: "javascript.note"}).then(() => {setLoading(false)})
    }, [])
    const handleOk = (values, showOne) => {
      const {label, ...others} = values;
      const functions = Object.keys(others).map(key => others[key])
      return setData({name: 'javascript.note', fource, data: { ...showOne, label, functions}}).then(() => {
        setLoading(true)
        return getData({name: "javascript.note"}).then(() => {setLoading(false)})
      })
    }
  return (
    <Spin spinning={loading}>
        <Page 
          title="Javascript笔记"
          data={notes}
          editMode={editMode}
          fource={fource}
          submit={handleOk}
        />
    </Spin>
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