import React, {useState, useEffect} from 'react';
import { Button, Input } from 'antd';
import styles from './index.less';


export default function Forward(props) {
    const [name, setname] = useState('defaultName');
    const [nameState, setnameState] = useState(false)
    const inputChange = (value) => {
        name = value
    }
  return (
    <div>
      <span>当前name为{name}</span>
      <Input defaultValue={name} onChange={(e) => inputChange(e.target.value)} />
      <Button type="primary" onClick={() => {setnameState(!nameState)}}>修改nameState</Button>
    </div>
  );
}
