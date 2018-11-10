//action types
const CHANGE_KEYWORD = 'CHANGE_KEYWORD';
const INIT_ORIGINDATA = 'INIT_ORIGINDATA';
const CHANGE_DATA = 'CHANGE_DATA';
//reducer
export default function (state, action) {
  if(!state) {
    return {
      keyword: '',
      originData: [],
      data: []
    };
  }
  switch (action.type) {
    case INIT_ORIGINDATA:
      return {
        ...state,
        originData: action.originData
      };
    case CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      };
    case CHANGE_DATA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
//action creators
export const initOriginData = (originData) => {
  return {type: INIT_ORIGINDATA, originData};
};
export const changeKeyword = (keyword) => {
  return {type: CHANGE_KEYWORD, keyword};
};
export const  changeData = (data) => {
  return {type: CHANGE_DATA, data};
}