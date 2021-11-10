import {getMenus} from './service'
const Model = {
    namespace: 'main',
    state: {
      status: undefined,
      menus: [],
      title: '',
    },
  
      effects: {
      *getMenus({ payload }, { call, put }) {
        const response = yield call(getMenus, payload);
        yield put({
          type: 'sendData', //调用reducers同步方法改变仓库数据
          payload: response,
              }); 
              // 通讯成功
        if (response.status === 'ok') {
          message.success('🎉 🎉 🎉  通讯成功！');
              }
          }
      },
    reducers: {
      sendData(state, { payload }) {
        //setAuthority(payload.currentAuthority); //设置验证识别
        console.log(payload)
        const {data = {}} = payload;
        const {data: {title, menus}} = data;
        return { ...state, title, menus };
      },
    },
  };
  export default Model;