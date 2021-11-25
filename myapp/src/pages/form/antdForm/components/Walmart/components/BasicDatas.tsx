
import React, {useState, useEffect} from 'react'
import { Input, Row, Form, Button } from 'antd';
const {Item} = Form;
export default function BasicDatas(props) {
  const {value, onChange, keyValue, form, disabled} = props;
  const [data, setData] = useState([])
  const changeData = (values) => {
    setData(values)
    onChange(values)
  }
  useEffect(() => {
    setData(value)
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
    <div>
        {
            data?.map((item, key)=>{
                return (
                    <Row key={key}>
                        <Item
                        name={`ruleorg${key}${keyValue}`}
                        label={"机构"}
                        >
                            <Input disabled={disabled} onChange={(e) => {valuesChange(e.target.value,'ruleOrg', item)}}/>
                        </Item>
                        <Item
                        name={`rulevalue${key}${keyValue}`}
                        label={"参数"}
                        >
                            <Input disabled={disabled} onChange={(e) => {valuesChange(e.target.value,'ruleValue', item)}}/>
                        </Item>
                        <Button disabled={disabled} onClick={() => addline()}>新增</Button>
                        <Button disabled={disabled} onClick={() => deleteline(item)}>删除</Button>
                    </Row>
                )
            })
        }
    </div>
  );
}