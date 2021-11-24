
import React, {useState, useEffect} from 'react'
import { Input, Button, Row, Form } from 'antd';
import {Link, connect} from 'umi';


import styles from './index.less';
import getbaseAry, { addone, move, moveRight, moveUp, moveDown } from './components/1024.js';
// import '../iconfont/iconfont'

const {Item} = Form;
function Resume(props) {
  const {getData, resume = {}} = props;
  const [form] = Form.useForm()
  useEffect(()=> {
    getData({name:'walmart.data'})
  },[]);
  useEffect(()=> {
    console.log(resume)
  },[resume])
  return (
    <div>
      <Form form={form}>
        <Item name="business">
        </Item>
      </Form>
    </div>
  );
}
const mapStateToProps = ({main}) => {
  return {
    data: main.data
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
export default connect(mapStateToProps, dispatchToProps)(Resume);
