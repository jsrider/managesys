/**
 * Created by xu on 16/8/14.
 */

import React from 'react';
import { Table } from 'antd';
import { DatePicker } from 'antd';
import { Button } from 'antd';

//日期菜单
function onChange(value, dateString) {
  console.log(value, dateString);
}

//表格数据
// 事例表中第四行合并了五列，除了第一列设置 colSpan = 5 外
// 其他列的第四行 colSpan = 0 (被合并掉，不会渲染)
const renderContent = function (value, row, index) {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render(text, row, index) {
    if (index < 4) {
      return <a href="#">{text}</a>;
    }
    return {
      children: <a href="#">{text}</a>,
      props: {
        colSpan: 3,
      },
    };
  },
}, {
  title: '年龄',
  dataIndex: 'age',
  render: renderContent,
}, {
  title: '家庭电话',
  colSpan: 2,
  dataIndex: 'tel',
  render(value, row, index) {
    const obj = {
      children: value,
      props: {},
    };
    // 第三列的第三行行合并
    if (index === 2) {
      obj.props.rowSpan = 2;
    }

    // 第三列的第四行被合并没了，设置 rowSpan = 0 直接不用渲染
    if (index === 3) {
      obj.props.rowSpan = 0;
    }

    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  },
}, {
  title: '手机号',
  colSpan: 0,
  dataIndex: 'phone',
  render: renderContent,
}, {
  title: '住址',
  dataIndex: 'address',
  render: renderContent,
}];

const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: '西湖区湖底公园1号',
}, {
  key: '2',
  name: '胡彦祖',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: '西湖区湖底公园1号',
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: '西湖区湖底公园1号',
}, {
  key: '4',
  name: '李夫人',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: '西湖区湖底公园1号',
}, {
  key: '5',
  name: '习大大',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: '西湖区湖底公园1号',
}];


export default React.createClass({
  render() {
    return (

    <div>
      <div>
        <DatePicker onChange={onChange} />
        <Button type="ghost" icon="search">查询</Button>
        <Button type="primary" size="large" className="ex">导出Excel</Button>
      </div>
      <h1 className="txt">2016年08月13日二矿产量日报</h1>


      <Table columns={columns} dataSource={data} bordered />

    </div>

    )
  }
})


