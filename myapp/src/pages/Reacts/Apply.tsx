
import React, {useState, useEffect} from 'react'
import { Modal, Button, Row, Form, Space } from 'antd';
import {Link, connect} from 'umi';

const {Item} = Form;
function Apply(props) {
  const {location = {}, value, applyItem, getItemApplyService, itemApplyService, formatData} = props;
  const [form] = Form.useForm();
  const { query = {} } = location;
  const {businessNo, processState, menuFlag} = query;
  const [disabled, setDisabled] = useState(false);
  const itemBody ={
      businessNo: Math.random().toString().slice(-10),
      editFlag:  'AS',
      itemNo: '123456789',
      itemName: props.itemName,
      itemType: props.itemType,
      businessData: "",
      userId: "123",
      orgId: "456",
      typeId: props.typeId,
      subTypeId: props.subTypeId,
      businessKey: "businessNo",
      memo: props.memo,
      applyEmpId: "456",
      applyOrgId: "789",
      applyRoleId: "012"
  }
  useEffect(()=> {
    if(menuFlag === "1" || ["1","2"].includes(processState)) {
        setDisabled(true)
    } else {
        setDisabled(false)
    }
  },[processState, menuFlag]);
  useEffect(()=> {
    businessNo && getItemApplyService({businessNo})
  },[businessNo])
  useEffect(() => {
    if(applyItem) {
        //9030972585
        //Object.assign(itemBody, {businessData: applyItem.businessData})
        form.setFieldsValue({business: JSON.parse(applyItem.businessData)})
    }
  },[applyItem])
  const submit = (flag) => {
    const editFlag = flag || businessNo ? "US": "AS";
    form.validateFields().then(values => {
        itemBody.businessData = formatData(values)
        itemApplyService(itemBody).then(() => {
            Modal.success({
                title: '提示',
                content: `${flag? "保存":"提交"}成功`,
                okText: '确认',
                onOk:() => {
                  form.resetFields();
                  props.closeModal &&props.closeModal()
                },
                cancelText: '取消',
              });
        })
    })
  }
  const save = () => {
    submit(businessNo ? "U": "A")
  }
  return (
    <div>
      <Form form={form}>
        <Item name="business">
            {
                 React.cloneElement(props.children, {
                    form,
                    disabled,
                 })
            }
        </Item>
        {
            !value && !disabled && (
                <Row>
                    <div style={{margin: "0 auto"}}>
                        <Space>
                            {
                                !businessNo && <Button type="primary" onClick={submit}> 提交</Button>
                            }
                            <Button onClick={save}>保存</Button>
                            {
                                !businessNo && <Button> 取消</Button>
                            }
                        </Space>
                    </div>
                </Row>
            )
        }
      </Form>
    </div>
  );
}
const mapStateToProps = ({main}) => {
    const key = Object.keys(main).filter(key =>  key.indexOf('walmart') === 0)[0]
    return {
        applyItem: main[key]&&main[key][0]
    }
  }
  const dispatchToProps = dispatch => {
    return {
      getItemApplyService(payload) {
        return dispatch({ type: 'main/getData', payload: { name: `walmart.${payload.businessNo}`} });
      },
      itemApplyService(payload) {
        return dispatch({ type: 'main/setData', payload: { name: `walmart.${payload.businessNo}`, data: payload}});
      }
    }
  }
  export default connect(mapStateToProps, dispatchToProps)(Apply);
