
import React, {useState, useEffect} from 'react'
import { Input, Button, Row, Col, Modal, Form } from 'antd';
import {Link, connect} from 'umi';

import styles from './index.less';
// import '../iconfont/iconfont'

const {Item} = Form;
function Resume(props) {
  const {getData, resume = {}, setData} = props;
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm();
  useEffect(()=> {
    getData({name:'resume.gaoxiaowei'}).then(res => {
      console.log(res)
    })
  },[]);
  useEffect(()=> {
    console.log(resume)
  },[resume])
  const openModal = () => {
    setIsModalVisible(true);
  }
  const handleOk = () => {
    Modal.confirm({
      title: '提示',
      content: '是否确认要发送消息给我？',
      okText: '确认',
      onOk:() => {
        setIsModalVisible(false);
        form.validateFields().then(values => {
          console.log(values)
          setData({name: 'others.message', data: values})
        })
      },
      cancelText: '取消',
    });
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={styles.resumeContent}>
      <object data={`https://wasd3044.github.io?t=${Math.random()}`} className={styles.clock}/>
      <Row><h1 className={styles.resumeTitle}>{resume.name}的个人简历</h1> <Button type="primary" style={{float: 'right',right: 0}} onClick={openModal}>留言给我</Button></Row>
      <Row>
        <Col span={8}>  
          <Row>
            <Col span={10} className={styles.resumeLabel}>姓名</Col>
            <Col span={14}>{resume.name}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>性别</Col>
            <Col span={14}>{resume.sex}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>年龄</Col>
            <Col span={14}>{new Date().getFullYear()-new Date(resume.birth).getFullYear()}</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>出生日期</Col>
            <Col span={14}>{resume.birth}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>籍贯</Col>
            <Col span={14}>{resume.nativePlace}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={8} className={styles.resumeLabel}>政治面貌</Col>
            <Col span={16}>{resume.political}</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>民族</Col>
            <Col span={14}>{resume.nation}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>学历</Col>
            <Col span={14}>{resume.education}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>专业</Col>
            <Col span={14}>{resume.major}</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>现住址</Col>
            <Col span={14}>{resume.home}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>电话：</Col>
            <Col span={14}>{resume.phone}</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={10} className={styles.resumeLabel}>邮箱</Col>
            <Col span={14}>{resume.Email}</Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.resumeLineTittle}>
        <span>教育经历</span>
      </Row>
      <Row>
        {
          resume.schools?.map((item, key) => {
            return (
              <Row className={styles.resumeSchool} key={key}>
                <Row>
                  <Col span={12}>
                    <Row>
                      <Col span={8} className={styles.resumeLabel}>毕业院校</Col>
                      <Col span={16}>{item.name}</Col>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Col span={8} className={styles.resumeLabel}>专业</Col>
                      <Col span={16}>{item.major}</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col span={12} className={styles.resumeRemarks}>{item.remarks}</Col>
                  <Col span={12}>
                    <Row>
                      <Col span={8} className={styles.resumeLabel}>时间</Col>
                      <Col span={16}>{item.times}</Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            )
          })
        }
      </Row>
      <Row className={styles.resumeLineTittle}>
        <span>工作经历</span>
      </Row>
      <Row>
        {
          resume.companys?.map((item, key) => {
            return (
              <Row className={styles.resumeCompanys} key={key}>
                <Row className={styles.resumeCompanysName}>{item.name}</Row>
                <Row>
                  <Col span={12}>
                    <Row>
                      <Col span={8} className={styles.resumeLabel}>公司名称</Col>
                      <Col span={16}>{item.name}</Col>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Col span={8} className={styles.resumeLabel}>职位</Col>
                      <Col span={16}>{item.remarks}</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Row>
                      <Col span={8} className={styles.resumeLabel}>主用技术栈</Col>
                      <Col span={16}>{item.major}</Col>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Col span={8} className={styles.resumeLabel}>在职时间</Col>
                      <Col span={16}>{item.times}</Col>
                    </Row>
                  </Col>
                </Row>
                {
                  item.children?.map(child => {
                    return (
                      <Row className={styles.resumeCompanysObject}>
                        <Row>
                          <Col span={12}>
                            <Row>
                              <Col span={8} className={styles.resumeLabel}>项目名称</Col>
                              <Col span={16}>{child.name}</Col>
                            </Row>
                          </Col>
                          <Col span={12}>
                            <Row>
                              <Col span={8} className={styles.resumeLabel}>客户群体</Col>
                              <Col span={16}>{child.remarks}</Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                            <Row>
                              <Col span={8} className={styles.resumeLabel}>主用技术栈</Col>
                              <Col span={16}>{child.ability}</Col>
                            </Row>
                          </Col>
                          <Col span={12}>
                            <Row>
                              <Col span={8} className={styles.resumeLabel}>时间</Col>
                              <Col span={16}>{child.times}</Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row className={styles.resumeObjectRemark}>
                          <Col span={24}>{child.major}</Col>
                          {child.components}
                        </Row>
                      </Row>
                    )
                  })
                }
                <div className={styles.splitLine}></div>
              </Row>
            )
          })
        }
      </Row>
      <Modal
        title="我怎么联系您？" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        cancelText={'取消'}
        okText={'确定'}
      >
        <Form form={form}>
            <Item name="contact">
               <Input.TextArea />
            </Item>
        </Form>
      </Modal>
    </div>
  );
}
const mapStateToProps = ({main}) => {
  return {
    resume: main.resumegaoxiaowei
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
