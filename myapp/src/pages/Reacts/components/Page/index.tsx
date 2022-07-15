import React, {useState, useEffect} from 'react'
import { Input, Modal, Row, Form, Button, Tooltip } from 'antd';

import styles from './index.less';
import icons from '../../../../iconfont/iconfont.css';
const {TextArea} = Input;
const {Item} = Form;
export default function Page(props) {
    const {editMode, submit, data, title} = props;
    const [bEdit, setEdit] = useState(false);
    const [showOne, setShowOne] = useState(null);
    const [loading, setLoading] = useState(true)
    const [form] = Form.useForm();
    useEffect(() => {
        setEdit(editMode) 
        console.log(editMode)
    }, [editMode])
    const handleOk = () => {
      form.validateFields().then(values => {
        submit && submit(values, showOne).finally(() => handleCancel())
      })
    }
    const handleCancel = () => {
      setShowOne(null)
      form.resetFields();
    }
    const selectOne = (item) => {
      setShowOne(JSON.parse(JSON.stringify(item)))
      const {label, functions} = item;
      const obj = {}
      functions.forEach((element, key) => {
        obj[key] = element;
      });
      form.setFieldsValue({label, ...obj})
    }
  return (
    <div>
        <Row><span className={styles.title}>{title}</span></Row>
        {
          editMode &&
          <Row className={styles.add}><Button type="primary" onClick={() => setShowOne({})}>新增</Button></Row>
        }
        <div className={styles.item}>
          {
            data?.map((item, key) => {
              return <Row className={styles.itemLine} key={key}>
                <h2>{item.label} &nbsp;
                {
                  editMode &&
                  <Tooltip title="修改"> <span className={`${icons.iconfont} ${icons.iconBianji}`} onClick={() => selectOne(item)}></span> </Tooltip>
                  
                }
                </h2>
                {
                  item.functions?.map((values, key) => {
                    return <TextArea autoSize={{minRows: 5}} value={values.value} key={key}/>
                    // return values.toString();
                  })
                }
              </Row>
            })
          }
        </div>
        <Modal
          title={!editMode? "查看":showOne?.label ? "修改": "新增"} 
          visible={!!showOne} 
          onOk={handleOk} 
          onCancel={handleCancel}
          cancelText={'取消'}
          okText={'确定'}
        >
          <Form form={form}>
              <Item name="label" label="名称">
                <Input  disabled={!editMode} />
              </Item>
              <Row><Button type="primary" onClick={() => {
                const functions = showOne?.functions || []
                functions.push('')
                setShowOne({ ...showOne, functions})
              }}>新增</Button></Row>
              {
                showOne?.functions?.map((item, key) => {
                  return <Item name={key} label={`方法${key+1}`} key={key}>
                      <TextArea autoSize={{minRows: 5}} disabled={!editMode} />
                    </Item>
                })
              }
          </Form>
        </Modal>
    </div>
  );
}