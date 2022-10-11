import { getStore, setStore } from "./mUtils";
// 本地获取所存访问参数
export const getDBparameter = () => {
  return getStore("db_parameter") || [];
};
// 本地设置访参
/**
 * 本地设置访参
 * @param {*} data type为1时，建议数组
 * @param {*} type 0 其后追加 1 覆盖增加
 */
export const setDBparameter = (data = {}, type = 0) => {
  console.log(data);
  if (type) {
    return setStore("db_parameter", data);
  }

  let arr = getDBparameter();
  console.log(arr, this);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.baseUrl == data.baseUrl && element.chainId == data.chainId)
      return "此地址已存在，请检查";
  }
  arr.push(data);
  console.log("12");
  setStore("db_parameter", arr);
  return getDBparameter();
};
