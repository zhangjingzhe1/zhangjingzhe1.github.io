import React, {useState, useEffect} from 'react';
import { Button, Input, message } from 'antd';
import styles from './index.less';


export default function Forward(props) {
    const [params, setparams] = useState({
      num: 0
    });
    const [numb, setnumb] = useState(0);
    const [btnType, setBtnTypes] = useState(true)
    const btnClick = () => {
      params.num = params.num+1;
      try{
        numb++
      }catch(e) {
        console.log(e)
      }
      setparams(params)
      // setBtnTypes(!btnType)
      message.info(params.num)
    }
    useEffect(() => {
      message.info('useEffect'+params.num)
    },[params.num])
  return (
    <div>
      <h1>useState</h1>
      <span>params.num{params.num}</span>
      <span>numb{numb}</span>
      {btnType}
      <Button onClick={() => {btnClick()}}>修改nameState</Button>
    </div>
  );
}
