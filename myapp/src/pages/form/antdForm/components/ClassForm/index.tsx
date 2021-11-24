import React, {useState, useEffect} from 'react';
import { Button, Input, Form } from 'antd';
import styles from './index.less';

const { Item } = Form;
export default class ClassForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      params: {num: 0},
      numb: 0,
      btnType:''
    }
  }
  componentDidMount() {
  }
  btnClick() {
    this.state.params.num++;
    this.state.numb++;
    this.setState({})
  }
  render() {
    const {params, numb} = this.state;
    return <div>
      <div>
        <h1>useState</h1>
        <span>params.num{params.num}</span>
        <span>numb{numb}</span>
        <Button onClick={() => {this.btnClick()}}>修改nameState</Button>
      </div>
    </div>
  }
}
