/**
 * Created by xu on 16/8/15.
 */

import React from 'react'
import G2 from 'g2'
import { Button } from 'antd';
import { DatePicker } from 'antd';
import { Link } from 'react-router'
function onChange(value, dateString) {
  console.log(value, dateString);
}







export default React.createClass({
  componentDidMount: function () {
    var data = [
      {name: '温度', time: '2015-03-01T12:00:00.000Z', value: 0},
      {name: '温度', time: '2015-03-01T13:30:00.000Z', value: 1.28},
      {name: '温度', time: '2015-03-01T14:00:00.000Z', value: 2.5},
      {name: '温度', time: '2015-03-01T15:30:00.000Z', value: 3.2},
      {name: '温度', time: '2015-03-01T16:00:00.000Z', value: 4},
      {name: '温度', time: '2015-03-01T17:00:00.000Z', value: 5.8},
      {name: '温度', time: '2015-03-01T18:00:00.000Z', value: 6.4},
      {name: '温度', time: '2015-03-01T19:00:00.000Z', value: 7.28},
      {name: '温度', time: '2015-03-01T20:00:00.000Z', value: 8.88},
      {name: '温度', time: '2015-03-01T21:00:00.000Z', value: 9.1},


    ];
    var chart = new G2.Chart({
      id: 'c1',
      width: 1100,
      height: 220,
      plotCfg: {
        margin: [20, 80, 100, 80]
      }
    });
    chart.source(data, {
      time: {
        type: 'time',
        mask: ' HH:MM',
        alias: '时间',


      },
      value: {
        alias: '温度'
      }
    });
    chart.guide().line(['2015-03-01T12:00:00.000Z',5], ['2015-03-01T20:00:00.000Z',5],);
    chart.legend(false);
    chart.line().position('time*value').color('darkred').shape('smooth').size(2);
    chart.point().position('time*value').color('darkred').shape('name', ['circle', 'rect', 'diamond']).size(4);
    chart.render();


    var data = [
      {name: '压力', time: '2015-03-01T12:00:00.000Z', value: 0},
      {name: '压力', time: '2015-03-01T13:30:00.000Z', value: 300},
      {name: '压力', time: '2015-03-01T14:00:00.000Z', value: 500.5},
      {name: '压力', time: '2015-03-01T15:30:00.000Z', value: 900.2},
      {name: '压力', time: '2015-03-01T16:00:00.000Z', value: 1000},
      {name: '压力', time: '2015-03-01T17:00:00.000Z', value: 1235.8},
      {name: '压力', time: '2015-03-01T18:00:00.000Z', value: 1326.4},
      {name: '压力', time: '2015-03-01T19:00:00.000Z', value: 1522.28},
      {name: '压力', time: '2015-03-01T20:00:00.000Z', value: 1799.88},
      {name: '压力', time: '2015-03-01T21:00:00.000Z', value: 1800.1},


    ];
    var chart = new G2.Chart({
      id: 'c1',
      width: 1100,
      height: 220,
      plotCfg: {
        margin: [20, 80, 100, 80]
      }
    });
    chart.source(data, {
      time: {
        type: 'time',
        mask: ' HH:MM',
        alias: '时间',


      },
      value: {
        alias: '压力'
      }
    });

    chart.guide().line(['2015-03-01T12:00:00.000Z',200], ['2015-03-01T20:00:00.000Z',200]);
    chart.legend(false);
    chart.line().position('time*value').color('darkblue').shape('smooth').size(2);
    chart.point().position('time*value').color('darkblue').shape('name', ['circle', 'rect', 'diamond']).size(4);
    chart.render();



    var data = [
      {name: '瞬时流量', time: '2015-03-01T12:00:00.000Z', value: 70},
      {name: '瞬时流量', time: '2015-03-01T13:30:00.000Z', value: 71.28},
      {name: '瞬时流量', time: '2015-03-01T14:00:00.000Z', value: 74.5},
      {name: '瞬时流量', time: '2015-03-01T15:30:00.000Z', value: 79.2},
      {name: '瞬时流量', time: '2015-03-01T16:00:00.000Z', value: 80},
      {name: '瞬时流量', time: '2015-03-01T17:00:00.000Z', value: 83.8},
      {name: '瞬时流量', time: '2015-03-01T18:00:00.000Z', value: 88.4},
      {name: '瞬时流量', time: '2015-03-01T19:00:00.000Z', value: 90.28},
      {name: '瞬时流量', time: '2015-03-01T20:00:00.000Z', value: 95.88},
      {name: '瞬时流量', time: '2015-03-01T21:00:00.000Z', value: 100.111},


    ];
    var chart = new G2.Chart({
      id: 'c1',
      width: 1100,
      height: 220,
      plotCfg: {
        margin: [20, 80, 100, 80]
      }
    });
    chart.source(data, {
      time: {
        type: 'time',
        mask: ' HH:MM',
        alias: '时间',


      },
      value: {
        alias: '瞬时流量'
      }
    });

    chart.legend(false);
    chart.line().position('time*value').color('darkgreen').shape('smooth').size(2);
    chart.point().position('time*value').color('darkgreen').shape('name', ['circle', 'rect', 'diamond']).size(4);
    chart.render();


    },


  render() {
    return (
    <div>
      <div>

        <DatePicker onChange={onChange} />
        <Button type="ghost" icon="search">查询</Button>
        <Button type="primary" size="large" className="ex"><Link to="/about">报表</Link></Button>
        <Button type="primary" size="large" className="ex">打印</Button>
        <Button type="primary" size="large" className="ex">导出Excel</Button>

      </div>
      <br />

      <h1 className="txt">总览日曲线</h1>

      <div className="zline">
        <div id="c1"></div>
      </div>




    </div>


    )}




})


