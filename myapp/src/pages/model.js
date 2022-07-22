import {getMenus, getData, setData} from './service'
const Model = {
    namespace: 'main',
    state: {
      status: undefined,
      menus: [],
      title: '',
    },
  
      effects: {
      *getMenus({ payload }, { call, put }) {
        try {
          const response = yield call(getMenus, payload);
          yield put({
            type: 'sendData', //调用reducers同步方法改变仓库数据
            payload: response,
          });
          return response
        } catch (err) {
          return Promise.reject(err)
        } 
          },
      *getData({ payload }, { call, put }) {
        try {
          const response = yield call(getData, payload);
          yield put({
            type: 'setgetDate', //调用reducers同步方法改变仓库数据
            payload: response,
          }); 
          return response
        } catch (err) {
          return Promise.reject(err)
        } 
          },
      *setData({ payload }, { call, put }) {
        try {
          const response = yield call(setData, payload);
          yield put({
            type: 'setgetDate', //调用reducers同步方法改变仓库数据
            payload: response,
            }); 
          return response
        } catch (err) {
          return Promise.reject(err)
        } 
      }
      },
    reducers: {
      sendData(state, { payload }) {
        //setAuthority(payload.currentAuthority); //设置验证识别
        const {data = {}} = payload;
        const {data: {title, menus}} = data;
        return { ...state, title, menus };
      },
      setgetDate(state, { payload }) {
        //setAuthority(payload.currentAuthority); //设置验证识别
        const {data = {}, config ={}} = payload;
        const obj={};
        if (config.params?.name)
        obj[config.params?.name.replace('.','')] = data.data;
        return { ...state, ...obj };
      },
    },
  };
  export default Model;