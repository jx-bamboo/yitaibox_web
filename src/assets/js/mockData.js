//  node --experimental-modules mockData.mjs
let mockData = {};
// var fs = require("fs");
// import fs from "fs";
let iswindow = true;
try {
  console.log(global)

  iswindow = false;
} catch (err) {

}
console.log(iswindow)

/*
 * @description    根据某个字段实现对json数组的排序
 * @param   array  要排序的json数组对象
 * @param   field  排序字段（此参数必须为字符串）
 * @param   reverse 是否倒序（默认为false）
 * @return  array  返回排序后的json数组
 */
function jsonSort(array, field, reverse) {
  //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
  if (array.length < 2 || !field || typeof array[0] !== "object") return array;
  //数字类型排序
  if (typeof array[0][field] === "number") {
    array.sort(function (x, y) {
      return x[field] - y[field];
    });
  }
  //字符串类型排序
  if (typeof array[0][field] === "string") {
    array.sort(function (x, y) {
      return x[field].localeCompare(y[field]);
    });
  }
  //倒序
  if (reverse) {
    array.reverse();
  }
  return array;
}

mockData.uccn_contentList5 = [
  {
    name: "ETHAN ZHANG",
    school: "上海交⼤计算机系⼯学硕⼠",
    txt1: "「创始⼈ / CEO / 董事⻓」",
    txt2: `中国第⼀代⽹络⼯程师`,
    img: "/content5_list_11.png",
    txt3: `微软第⼀代SaaS系统首席工程师`,
    desc: "创始⼈",
    icon: '/content5_list_icon11.png'
  },
  {
    name: "刘炜",
    school: "英国杜伦⼤学硕⼠",
    txt1: "「联合创始⼈ / 董事⻓秘书」",
    txt2: "德诚国际市场运营官",
    img: "/content5_list_22_1.png",
    txt3: `区块链实体经济应⽤-数权经济密码 <作者>`,
    desc: "联合创始人",
    icon: '/content5_list_icon22_1.png'
  },
  {
    name: "黄国良",
    school: "英国诺桑比亚大学（BA）",
    txt1: "「联合创始人/ VP」",
    txt2: "德诚国际市场运营官",
    img: "/content5_list_33.png",
    txt3: "数权经济密码<作者>",
    desc: "联合创始人",
    icon: '/content5_list_icon33.png'
  },
  {
    name: "赖健⾏",
    school: "",
    txt1: "「联合创始⼈ / 产品总监」",
    txt2: "区块链⾏业产品先⾏者",
    img: "/content5_list_44.png",
    txt3: `深圳前海博宝科技有限公司
      技术总负责⼈`,
    desc: "联合创始人",
    icon: '/content5_list_icon44.png'
  },
  {
    name: " 聂文军",
    school: "四川大学",
    txt1: "「首席开发工程师」",
    txt2: "",
    img: "/content5_list_77_1.png",
    txt3: "DBCHAIN数据库架构师",
    desc: "",
    icon: '/content5_list_icon77_1.png'
  },
  {
    name: "Brian Maw",
    school: "斯坦福大学",
    txt1: "「美国区 VP Brian Maw」",
    txt2: `Finnovant 公司CEO `,
    img: "/content5_list_55.png",
    txt3: "VISA 信⽤卡产品总监",
    desc: "",
    icon: '/content5_list_icon55.png'
  },
  {
    name: "Mark Whaley",
    school: "⾼级技术顾问",
    txt1: "「美国区CTO」",
    txt2: "",
    img: "/content5_list_66_1.png",
    txt3: "IBM多年⾼级架构师",
    desc: "",
    icon: '/content5_list_icon66_1.png'
  },
 
  {
    name: "Patrick Wright",
    school: "",
    txt1: "「美国区 技术总监」",
    txt2: "",
    img: "/content5_list_88.png",
    txt3: "Visa 技术总监",
    desc: "",
    icon: '/content5_list_icon88.png'
  },
]
export default mockData;
