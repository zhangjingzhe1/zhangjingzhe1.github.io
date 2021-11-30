import React, {useState, useEffect} from 'react'
import { Input, Modal, Row, Form, Button, Spin } from 'antd';
import {Link, connect} from 'umi';

import styles from './index.less';

const {TextArea} = Input;
const {Item} = Form;
function Note(props) {
    const {editMode, getData, setData, notes, fource} = props;
    const [bEdit, setEdit] = useState(false);
    const [showOne, setShowOne] = useState(null);
    const [loading, setLoading] = useState(true)
    const [form] = Form.useForm();
    useEffect(() => {
        setEdit(editMode) 
        console.log(editMode)
    }, [editMode])
    useEffect(() => {
        getData({name: "javascript.note"}).then(() => {setLoading(false)})
    }, [])
    const handleOk = () => {
      form.validateFields().then(values => {
        const {label, ...others} = values;
        const functions = Object.keys(others).map(key => others[key])
        setData({name: 'javascript.note', fource, data: { ...showOne, label, functions}}).then(() => {
          handleCancel();
          setLoading(true)
          getData({name: "javascript.note"}).then(() => {setLoading(false)})
        })
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
    <Spin spinning={loading}>
        <Row><span className={styles.title}>JavaScript笔记</span></Row>
        {
          editMode &&
          <Row><Button type="primary" onClick={() => setShowOne({})}>新增</Button></Row>
        }
        <div className={styles.item}>
          {
            notes?.map((item, key) => {
              return <Row className={styles.itemLine} key={key}>
                <h2>{item.label} 
                {
                  editMode &&
                  <Button type="primary" onClick={() => selectOne(item)}>修改</Button>
                }
                </h2>
                {
                  item.functions?.map((values, key) => {
                    return <TextArea autoSize={{minRows: 5}} value={values} key={key}/>
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
    </Spin>
  );
}
const mapStateToProps = ({main}) => {
    return {
     notes: main.javascriptnote
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
  export default connect(mapStateToProps, dispatchToProps)(Note);