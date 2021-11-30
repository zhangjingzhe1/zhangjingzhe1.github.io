import React, {useState, useEffect} from 'react'
import { Spin } from 'antd';
import { connect} from 'umi';

import Page from "../../components/Page"
function CssNote(props) {
    const {editMode, getData, setData, cssnote, fource} = props;
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getData({name: "javascript.cssnote"}).then(() => {setLoading(false)})
    }, [])
    const handleOk = (values, showOne) => {
      const {label, ...others} = values;
      const functions = Object.keys(others).map(key => others[key])
      return setData({name: 'javascript.cssnote', fource, data: { ...showOne, label, functions}}).then(() => {
        setLoading(true)
        return getData({name: "javascript.cssnote"}).then(() => {setLoading(false)})
      })
    }
  return (
    <Spin spinning={loading}>
        <Page 
          title="CSS笔记"
          data={cssnote}
          editMode={editMode}
          fource={fource}
          submit={handleOk}
        />
    </Spin>
  );
}
const mapStateToProps = ({main}) => {
    return {
      cssnote: main.javascriptcssnote
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
  export default connect(mapStateToProps, dispatchToProps)(CssNote);