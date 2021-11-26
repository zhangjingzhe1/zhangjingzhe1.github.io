
import React, {useState, useEffect} from 'react'
import { Input, Row, Form, Button, Col } from 'antd';
const {Item} = Form;
export default function BasicDatas(props) {
  const {value, onChange, keyValue, form, disabled} = props;
  const [data, setData] = useState([])
  const changeData = (values) => {
    setData(values)
    onChange(values)
  }
  useEffect(() => {
    if(isSame(value[0],data[0])){

    }else {
      setData(value)
    }
  }, [value])
  useEffect(() => {
    const values = {};
    data?.map((item, key) => {
        values[`ruleorg${key}${keyValue}`] = item.ruleOrg
        values[`rulevalue${key}${keyValue}`] = item.ruleValue
    })
    form.setFieldsValue({...values})
  }, [data])
  const valuesChange = (val, name, block) => {
    block[name] = val
  }
  const addline = () => {
      const item = data[0]
      item.ruleValue = "";
      item.ruleOrg = ""
      data.push(item)
    changeData(JSON.parse(JSON.stringify(data)))
  }
  const deleteline = (item) => {
    changeData(JSON.parse(JSON.stringify(data.filter(line => (line!==item)))))
  }
  return (
    <div style={{padding:10, width:"100%"}}>
        {
            data?.map((item, key)=>{
                return (
                    <Row key={key}>
                        <Col span={10}>
                            <Item
                            name={`ruleorg${key}${keyValue}`}
                            label={"机构"}
                            rules={[{required: true, message: "请选择机构"}]}
                            >
                                <Input disabled={disabled} onChange={(e) => {valuesChange(e.target.value,'ruleOrg', item)}}/>
                            </Item>
                        </Col>
                        <Col span={10}>
                            <Item
                            name={`rulevalue${key}${keyValue}`}
                            label={"参数"}
                            rules={[{required: true, message: "请输入参数"}]}
                            >
                                <Input disabled={disabled} onChange={(e) => {valuesChange(e.target.value,'ruleValue', item)}}/>
                            </Item>
                        </Col>
                        <Col span={4}>
                            <Button disabled={disabled} onClick={() => addline()} style={{width:"50%"}}>+</Button>
                            <Button disabled={disabled} onClick={() => deleteline(item)} style={{width:"50%"}}>-</Button>
                        </Col>
                        
                    </Row>
                )
            })
        }
    </div>
  );
}