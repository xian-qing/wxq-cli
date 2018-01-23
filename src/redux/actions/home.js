export const HOME_INIT = 'home/init';  //卸载页面恢复默认

export const HOME_GETLIST = 'home/getList';
export const HOME_ADDLIST = 'home/addList';
export const HOME_REMOVEITEN = 'home/removeItem';
export const HOME_INCREMENT = 'home/increment';
export const HOME_INCREMENT_ASYNC = 'home/increment_async';
export const HOME_DECREMENT = 'home/decrement';
export const HOME_GETTOKEN = 'home/getToken';
export const HOME_SETTOKEN = 'home/setToken';


export function unmount() {
  return { type: HOME_INIT }
}

export function getList(data) {
  console.log(data)
  return { type: HOME_GETLIST, data }
}

export function addList(data) {
  return { type: HOME_ADDLIST, data }
}
export function removeItem(data) {

  return { type: HOME_REMOVEITEN, data }
}



export function increment(data) {
  console.log(data)
  return { type: HOME_INCREMENT,data}
}

export function increment_async(data) {
  return { type: HOME_INCREMENT_ASYNC,data}
}

export function decrement(data) {
  return { type: HOME_DECREMENT }
}


export function getToken(data) {
  return { type: HOME_GETTOKEN}
}
export function setToken(data) {
  return { type: HOME_SETTOKEN ,data}
}