import {takeEvery, takeLatest} from 'redux-saga/effects';
import {put} from 'redux-saga/effects';
import {HOME_INCREMENT_ASYNC, HOME_GETTOKEN} from '../actions/home';
import {Ajax} from '../../service/axios';

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Our worker Saga: 将异步执行 increment 任务
export function* incrementAsync(data) {
  yield delay(1000);
  yield put({
    type: 'home/increment', data: {
      ...data, b: 2
    }
  });
}


//获取token
export function* getTokenAsync(data) {
  try {
    const token = yield Ajax({
      data: JSON.stringify({
        query: `{
          qiniuUpToken{
             uptoken
            }
          }`
      })
    });
    const uptoken = token.data.qiniuUpToken.uptoken;
    yield put({type: 'home/setToken', uptoken});
  } catch (e) {
    console.log(e);
  }
}


export function* watchHome() {
  yield [
    takeEvery(HOME_INCREMENT_ASYNC, incrementAsync),
    takeLatest(HOME_GETTOKEN, getTokenAsync)
  ];
}
