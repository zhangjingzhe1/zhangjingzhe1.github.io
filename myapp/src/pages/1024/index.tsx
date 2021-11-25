
import React, {useState, useEffect} from 'react'
import { Modal, Button, Row, Input } from 'antd';
import {Link, connect} from 'umi';

import styles from './index.less';
import getbaseAry, { addone, move, moveRight, moveUp, moveDown } from './components/1024.js';
// import '../iconfont/iconfont'

class Gaming1024 extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      baseData: [],
      baseLine: 5,
      list: []
    }
  }
  componentDidMount() {
    const absedata = JSON.parse(JSON.stringify(getbaseAry(this.state.baseLine)))
    this.setState({baseData: absedata})
    document.addEventListener('keydown', this.keyDown.bind(this))
  }
  componentWillReceiveProps(next) {
    this.setState({list: next.list})
  }
  isSameArray = (font, last) => {
    return JSON.stringify(font) === JSON.stringify(last)
  }
  keyDown = (e) => {
    const {keyCode} = e;
    let result  = [[]]
    const baseDatacopy = JSON.parse(JSON.stringify(this.state.baseData));
    if(keyCode === 37) {
      result = move(baseDatacopy);
      // setBaseData(addone(move(baseData)))
    }
    if(keyCode === 38) {
      result = moveUp(baseDatacopy);
      // setBaseData(addone(moveUp(baseData)))
    }
    if(keyCode === 39) {
      result = moveRight(baseDatacopy);
      // setBaseData(addone(moveRight(baseData)))
    }
    if(keyCode === 40) {
      result = moveDown(baseDatacopy);
      // setBaseData(addone(moveDown(baseData)))
    }
    if(!this.isSameArray(result, this.state.baseData) && [37,38,39,40].includes(keyCode)) {
      this.setState({baseData: JSON.parse(JSON.stringify(addone(result)))})
    } else {
      if(this.isSameArray(move(baseDatacopy), this.state.baseData) &&
       this.isSameArray(moveUp(baseDatacopy), this.state.baseData) &&
       this.isSameArray(moveRight(baseDatacopy), this.state.baseData) &&
       this.isSameArray(moveDown(baseDatacopy), this.state.baseData)) {
        Modal.confirm({
          title: '请输入姓名',
          content: <div><label>姓名：</label><Input onChange={(e) => this.setState({score: e.target.value})}/></div>,
          okText: '确认',
          onOk:() => {
            this.props.setData({name: 'react.1024list', data: {score: this.setState.score}})
          },
          cancelText: '取消',
        });
       }
    }
  }
  reset = () => {
    const absedata = JSON.parse(JSON.stringify(getbaseAry(this.state.baseLine)))
    this.setState({baseData: absedata})
  }
  render() {
    const { baseData, baseLine } =this.state;
    return (
      <div className={styles.mainContent}>
        <Row><Button type="primary" onClick={this.reset}>重置</Button></Row>
        <div className={styles.blockContent}>
        {
          baseData.map((line, index) => {
            return <div key={index} style={{width: `${50*line.length}px`}}>
              {
                line.map((item, key) => {
                  return <div key={key} className={`${styles.lineItem} ${styles['lineItemColor'+item]}`}>{item || ''}</div>
                })
              }
            </div>
          })
        }
      </div>
      </div>
    );
  }
}
const mapStateToProps = ({main}) => {
  return {
    list: main.react1024list
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
export default connect(mapStateToProps, dispatchToProps)(Gaming1024);