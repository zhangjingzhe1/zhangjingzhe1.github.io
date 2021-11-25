
import React, {useState, useEffect} from 'react'
import { Input, Button, Modal, Form } from 'antd';
import {Link, connect} from 'umi';

import Apply from './components/Apply';

import ApplyItems from './components/ApplyItems';
import {formatData} from './components/utils.js';
import styles from './index.less';
import getbaseAry, { addone, move, moveRight, moveUp, moveDown } from './components/1024.js';
// import '../iconfont/iconfont'

const {Item} = Form;
function Resume(props) {
  const {getData, resume = {}} = props;
  const [location, setLocation] = useState({query: {}})
  const [isModalVisible, setisModalVisible] = useState(false)
 const closeModal = () => {
  setisModalVisible(false)
 }
 const openModal = () => {
  setLocation({})
  setisModalVisible(true)
 }
 const applyModal = () => {
  Modal.confirm({
    title: '模拟进入审批状态(请输入businessNo)',
    content: <Input onChange={(e) => {location.query.businessNo = e.target.value}}/>,
    okText: '确认',
    onOk:() => {
      setLocation({query: {businessNo: location.query.businessNo, menuFlag:"1"}})
      setisModalVisible(true)
    },
    cancelText: '取消',
  });
 }
 const updata = () => {
  Modal.confirm({
    title: '模拟进入修改状态(请输入businessNo)',
    content: <Input onChange={(e) => {location.query.businessNo = e.target.value}}/>,
    okText: '确认',
    onOk:() => {
      setLocation({query: {businessNo: location.query.businessNo}})
      setisModalVisible(true)
    },
    cancelText: '取消',
  });
 }
  return (
    <div>
      <Button onClick={openModal}>申请</Button>
      <Button onClick={applyModal}>审批</Button>
      <Button onClick={updata}>修改</Button>
      <Modal
        title="Basic Modal" 
        visible={isModalVisible} 
        footer={null}
        onCancel={closeModal}
        width={850}
      >
        <Apply
          itemName="itemName"
          itemType="itemType"
          typeId="typeId"
          subTypeId="subTypeId"
          memo="memo"
          location={location}
          formatData={formatData}
          closeModal={closeModal}
        >
          <ApplyItems />
        </Apply>
      </Modal>

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
