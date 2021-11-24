import React, {useState, useEffect} from 'react';
import styles from './index.less';
import { Menu, Button, Row } from 'antd';
import ClassForm from './components/ClassForm';
import FunctionForm from './components/FunctionForm';
import Forward from './components/Forward';
import Walmart from './components/Walmart'
export default function Form(props) {
  const [types, setTypes] = useState('classForm')
  return (
    <div>
      <Row>
        <Button onClick={() => setTypes('classForm')}>classComponents</Button>
        <Button onClick={() => setTypes('functionForm')}>functionComponents</Button>
        <Button onClick={() => setTypes('forward')}>forward</Button>
        <Button onClick={() => setTypes('walmart')}>walmart</Button>
      </Row>
      {
        types === "classForm" ?
        <ClassForm />:
        types === "forward" ?
        <Forward />: 
        types === "functionForm" ?
        <FunctionForm />:
        types === "walmart" ?
        <Walmart />:
        null
      }
    </div>
  );
}
