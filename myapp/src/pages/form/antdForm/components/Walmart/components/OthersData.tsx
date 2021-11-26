
import React, {useState, useEffect} from 'react'
import { Input, Row, Form, Button } from 'antd';

import BasicDatas from "./BasicDatas"
const {Item} = Form;
export default function OthersData(props) {
  const {value, onChange, form, disabled} = props;
  const [data, setData] = useState([])
  const changeData = (values) => {
    setData(values)
    onChange(values)
  }
  useEffect(() => {
    if(value[0].three !== data) {
      setData(value)
      changeData(value)
    }
  }, [value])
  const valuesChange = (val, name, block) => {
    block[name] = val
  }
  const addline = () => {
      data.push({
        "ruleCode": "basicData",
        "ruleValue": "",
        "ruleOrg": "",
        "flag":"1"
    })
    changeData(JSON.parse(JSON.stringify(data)))
  }
  const deleteline = (item) => {
    changeData(JSON.parse(JSON.stringify(data.filter(line => (line!==item)))))
  }
  const blockOnChange = (index, block) => {
    data[index] = block
  }
  const addBlock = () => {
    data.push([{
        "three": data.length.toString(),
        "ruleCode": "lmkTypes",
        "ruleValue": "",
        "ruleOrg": "",
        "flag":"1"
    }])
    changeData(JSON.parse(JSON.stringify(data)))
  }
  const deleteBlock = (block) => {
    changeData(JSON.parse(JSON.stringify(data.filter(item => item !== block))))
  }
  return (
    <div>
        {
            data?.map((block, key)=>{
                return (
                    <Row key={key} style={{padding: 10, marginTop: 50, borderBottomColor: "#DDD"}}>
                        <Row>
                            <Button disabled={disabled} onClick={() => addBlock()}>新增</Button>
                            <Button disabled={disabled} onClick={() => deleteBlock(block)}>删除</Button> 
                        </Row>
                        <Row>
                            <BasicDatas disabled={disabled} value={block} onChange={(val) => blockOnChange(key, val)} keyValue={`other${key}`} form={form}/>
                        </Row>
                        
                    </Row>
                )
            })
        }
        
    </div>
  );
}