
import React, {useState, useEffect} from 'react'
import { Input, Row, Form } from 'antd';

import dataToParams from "./utils.js"
// import '../iconfont/iconfont'
import BasicDatas from './BasicDatas'
import OthersData from './OthersData'
import styles from '../index.less'
const {Item} = Form;
const data ={
    "ruleType": "use",
    "ruleName": "",
    "sencetype": "",
    "senceName": "",
    "basicDatas": [{
        "ruleCode": "basicData",
        "ruleValue": "",
        "ruleOrg": "",
        "flag":"1"
    }],
    "othersData": [
        {
            "three": "0",
            "ruleCode": "basicData",
            "ruleValue": "",
            "ruleOrg": "",
            "flag":"1"
        }
    ]
}
export default function ApplyItems(props) {
  const {value, onChange, form, disabled} = props;
  useEffect(() => {
    form.setFieldsValue({...dataToParams(value || data)})
  }, [value])
  return (
    <div>
        <Row>
            <Item
                name="ruleType"
                label={"规则类型"}
            >
                <Input disabled={disabled}/>
            </Item>
        </Row>
        <Row>
            <Item
                name="ruleName"
                label={"规则名称"}
            >
                <Input  disabled={disabled}/>
            </Item>
        </Row>
        <Row className={styles.walmartLineTittle}><span>基础配置</span></Row>
        <Row>
            <Item
                name="basicDatas"
            >
                <BasicDatas form={form} disabled={disabled} />
            </Item>
        </Row>
        <Row className={styles.walmartLineTittle}><span>规则配置</span></Row>
        <Row>
            <Item
                name="othersData"
            >
                <OthersData form={form} disabled={disabled}/>
            </Item>
        </Row>
    </div>
  );
}