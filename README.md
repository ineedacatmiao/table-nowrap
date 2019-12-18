# table-nowrap

## 使用方法

yarn：

``` js
yarn add table-nowrap
```

npm：

``` js
npm install table-nowrap
```

首先需要引入

``` js
import calcWidthColumns from 'table-nowrap';

const columns = [
        {label: '车牌号', prop: 'carnum'},
        {label: '月份', prop: 'month'},
        {label: '类型', prop: 'name'},
        {label: '金额（元）', prop: 'amount'},
        {label: '更新时间', prop: 'gmtModified'}
    ];
const data=[
  {"amount":1000,"carnum":"冀B33033","month":"201911","name":"利息","gmtModified":"2019-12-06 16:24:12"},
  {"amount":1000.11,"carnum":"冀B33033","month":"201911","name":"车险","gmtModified":"2019-11-29 19:29:44"},
  {"amount":1000.11,"carnum":"冀B33033","month":"201911","name":"折旧费","gmtModified":"2019-11-29 19:29:44"}
];

const newColumns = calcWidthColumns(columns,data,style)

newColumns结果是：[
  {label: "车牌号",prop: "carnum",minWidth: 104},
  {label: "月份",prop: "month",minWidth: 103},
  {label: "类型",prop: "name",minWidth: 84},
  {label: "金额（元）",prop: "amount",minWidth: 108},

]

还可以传入style，style是指表格内的样式，字体大小和字体

```


