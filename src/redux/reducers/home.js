import {
  HOME_INIT,
  HOME_GETLIST,
  HOME_ADDLIST,
  HOME_REMOVEITEN,
  HOME_DECREMENT,
  HOME_INCREMENT,
  HOME_SETTOKEN
} from '../actions/home';

const initState = {
  list: [],
  count: 0,
  token: "无"
};

export default function reducer(state = initState, action) {
  let count = state.count;
  switch (action.type) {
    case HOME_GETLIST:
      console.log(action);
      return {
        ...state
      };
    case HOME_INIT:
      state = initState;
      return {
        ...state
      };
    case HOME_ADDLIST:
      return {
        ...state
      };
    case HOME_REMOVEITEN:
      return {
        ...state
      };
    case HOME_INCREMENT:
      count++;
      return {
        ...state, count
      };
    case HOME_DECREMENT:
      count--;
      return {
        ...state, count
      };
    case HOME_SETTOKEN:
      return {
        ...state, token: action.uptoken
      };

    default:
      return state;
  }
}
